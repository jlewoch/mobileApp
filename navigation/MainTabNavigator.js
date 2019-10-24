import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
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

const config = Platform.select({
  web: {headerMode: 'screen'},
  default: {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
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
    Home: HomeScreen,
  },
  {...config, initialRouteName: 'Home'},
);
export const ProfileStack = createStackNavigator(
  {
    UserProfile: UserProfileScreen,
    PetProfile: PetProfileScreen,
  },
  {...config, initialRouteName: 'Home'},
);
