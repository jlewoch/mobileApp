import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import colors from '../constants/colors';
// auth screens
import LoginScreen from '../screens/login';
import SignupScreen from '../screens/signup';
import ForgotPasswordScreen from '../screens/forgot';
// other screens

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
