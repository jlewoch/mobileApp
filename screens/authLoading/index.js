import React, {Component} from 'react';

import {Text, View, AsyncStorage, ActivityIndicator} from 'react-native';

export class AuthLoadingScreen extends Component {
  componentDidMount() {
    this._authTokenCheck();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _authTokenCheck = async () => {
    this.props.navigation.navigate('Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <Text>hello</Text>
      </View>
    );
  }
}

export default AuthLoadingScreen;
