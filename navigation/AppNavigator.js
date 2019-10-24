import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthLoading from '../screens/authLoading';
import {AuthStack} from './MainTabNavigator';
import HomeScreen from '../screens/home';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      Auth: AuthStack,
      App: HomeScreen,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
