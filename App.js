import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {View, StatusBar} from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import store from './store';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar hidden />
        <AppNavigator />
      </Provider>
    );
  }
}
