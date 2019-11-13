import React, {Component} from 'react';

import {StyleSheet, AsyncStorage, ActivityIndicator} from 'react-native';
import colors from '../../constants/colors';

export class AuthLoadingScreen extends Component {
  componentDidMount() {
    this._authTokenCheck();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _authTokenCheck = async () => {
    // get token from async storage
    const token = await AsyncStorage.getItem('accessToken');
    // check if the token exists
    if (token) {
      this.props.navigation.navigate('App');
    } else {
      // navigate to auth screen by default
      this.props.navigation.navigate('Auth');
    }
  };

  // Render any loading content that you like here
  render() {
    return (
      <ContainerSafeView style={StyleSheet.container}>
        <ActivityIndicator size="large" color={colors.main} />
      </ContainerSafeView>
    );
  }
}

export default AuthLoadingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
