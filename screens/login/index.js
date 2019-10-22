import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import Row from '../../components/row';
import Section from '../../components/section';
import Header from '../../components/header';

export class LoginScreen extends Component {
  static navigationOptions = {
    header: () => <Header title="App Name" />,
  };

  render() {
    return (
      <Section style={{flex: 0.75}}>
        <Text>Login</Text>
      </Section>
    );
  }
}
LoginScreen.propTypes = {};
const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownprops) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
