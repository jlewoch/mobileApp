import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthLoading from '../screens/authLoading';
import {AuthStack} from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
