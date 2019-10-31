import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthLoading from '../screens/authLoading';
import {AuthStack} from './MainTabNavigator';
import UserProfileScreen from '../screens/userProfile';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      Auth: AuthStack,
      App: UserProfileScreen,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
