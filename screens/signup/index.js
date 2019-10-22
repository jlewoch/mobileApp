import React, {Component} from 'react';
import {KeyboardAvoidingView, Dimensions} from 'react-native';
import Header from '../../components/header';
const {height, width} = Dimensions.get('window');

export default class SignupScreen extends Component {
  static navigationOptions = {
    header: () => <Header title="Signup" />,
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
        behavior="padding"
        enabled
        keyboardVerticalOffset={height / 4}></KeyboardAvoidingView>
    );
  }
}
