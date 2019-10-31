import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import colors from '../constants/colors';
// auth screens
import LoginScreen from '../screens/login';
import SignupScreen from '../screens/signup';
import ForgotPasswordScreen from '../screens/forgot';
// home screens
import HomeScreen from '../screens/home';

// profile screens
import UserProfileScreen from '../screens/userProfile';
import PetProfileScreen from '../screens/petProfile';
import Icon from '../components/icon';

const config = Platform.select({
  web: {headerMode: 'screen'},
  default: {
    headerLayoutPreset: 'center',

    defaultNavigationOptions: props => {
      return {
        tabNavigator: {backgroundColor: '#ddd'},
        headerStyle: {
          backgroundColor: colors.main,
        },
        headerTitleStyle: {
          alignSelf: 'center',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <Icon
            type="Entypo"
            name="menu"
            color="white"
            onPress={() => props.navigation.toggleDrawer()}
            style={{marginRight: 15}}
          />
        ),
      };
    },
  },
});

export const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    ForgotPassword: ForgotPasswordScreen,
  },
  {...config, initialRouteName: 'Login'},
);
export const HomeStack = createStackNavigator(
  {
    Dashboard: HomeScreen,
  },
  {
    ...config,
    initialRouteName: 'Dashboard',
    navigationOptions: {
      drawerIcon: ({focused, tintColor}) => {
        return <Icon name="user" color={focused ? tintColor : colors.main} />;
      },
    },
  },
);
export const ProfileStack = createStackNavigator(
  {
    UserProfile: UserProfileScreen,
    PetProfile: {screen: PetProfileScreen, path: 'profile/:name'},
  },
  {
    ...config,
    navigationOptions: props => {
      return {
        drawerIcon: ({focused, tintColor}) => {
          return <Icon name="user" color={focused ? tintColor : colors.main} />;
        },
      };
    },
  },
);
export default createDrawerNavigator(
  {Home: HomeStack, Profile: ProfileStack},
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  },
);
