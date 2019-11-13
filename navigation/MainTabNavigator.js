/* 
  all stack navigation setup and configurations
*/
// dependnecies
import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
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
import {RequestScreen} from '../screens/clientRequest';

// event screens
import EventSummaryScreen from '../screens/eventSummary';

// misc
import Icon from '../components/icon';
import CustomDrawer from '../components/drawer';
import {deviceWidth} from '../constants/dimensions';
import {AdminAccessRequestDetailsScreen} from '../screens/adminAccessRequestDetails';
import {AdminAccessRequestsScreen} from '../screens/adminAccessRequests';
import {AdminEventRequestsScreen} from '../screens/adminEventRequests';

// initial global config
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
            onPress={props.navigation.openDrawer}
            style={{marginRight: 15}}
          />
        ),
      };
    },
  },
});
// authentication stack
export const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    ForgotPassword: ForgotPasswordScreen,
  },
  {...config, initialRouteName: 'Login'},
);

// home stack
const HomeStack = createStackNavigator(
  {
    Dashboard: HomeScreen,
    Request: RequestScreen,
  },
  {
    ...config,
    initialRouteName: 'Dashboard',
  },
);
// events stack
const EventStack = createStackNavigator(
  {
    EventSummary: EventSummaryScreen,
    PetSummary: RequestScreen,
  },
  config,
);
// profile stack
const ProfileStack = createStackNavigator(
  {
    UserProfile: UserProfileScreen,
    PetProfile: {screen: PetProfileScreen, path: 'profile/:name'},
  },
  config,
);
// admin stack
const AdminStack = createStackNavigator(
  {
    AccessRequests: AdminAccessRequestsScreen,
    AccessRequestDetails: AdminAccessRequestDetailsScreen,
    EventRequests: AdminEventRequestsScreen,
  },
  config,
);
// request stack

// declare and configue drawer navigator
const AppStack = createDrawerNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack,
    Event: EventStack,
    Admin: AdminStack,
  },
  {
    initialRouteName: 'Home',

    contentComponent: CustomDrawer,
    // edgeWidth?: number,
    drawerPosition: 'left',
    drawerType: 'slide',
    drawerLockMode: 'locked-open',
    // swipeEdgeWidth?: number,
    drawerWidth: () => (deviceWidth / 4) * 3,
    hideStatusBar: true,
    unmountInactiveRoutes: true,
  },
);
// stack exports
module.exports = {AuthStack, AppStack};
