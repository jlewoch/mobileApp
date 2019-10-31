import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import Section from '../../components/section';
import Header from '../../components/header';
import Input from '../../components/input';
import Button from '../../components/button';
import StyledText from '../../components/styledText';
import Row from '../../components/row';
import {checkEmail, checkPassword} from '../../utils/validation';
import colors from '../../constants/colors';

export class LoginScreen extends Component {
  static navigationOptions = {
    header: () => <Header title="App Name" />,
  };
  state = {
    email: '',
    password: '',
  };
  render() {
    const {values, errors} = this.state;
    return (
      <Section testID="loginComponent">
        <Input
          testID="loginEmailInput"
          label="Email"
          autoFocus
          icon="mail"
          value={email}
          errormsg="Please enter a valid email address"
          onChange={e => this._handleOnChange(e, 'email')}
          validation={checkEmail}
        />
        <Input
          testID="loginPasswordInput"
          label="Password"
          icon="lock"
          value={password}
          secure
          onChange={e => this._handleOnChange(e, 'password')}
        />
        <StyledText
          testID="loginForgot"
          type="footnote"
          onPress={() => this.props.navigation.navigate('ForgotPassword')}
          style={{
            color: colors.main,
            fontWeight: '600',
          }}>
          Forgot Password
        </StyledText>
        <Button
          testID="loginBtn"
          disabled={checkEmail(email) || checkPassword(password)}
          label="Login"
          onPress={this._signInAsync}
        />
        <Row style={{justifyContent: 'center'}}>
          <StyledText type="footnote">Don't have an Account?</StyledText>

          <StyledText
            onPress={this._signInAsync}
            testID="loginSignup"
            type="footnote"
            style={{
              color: colors.main,
              fontWeight: '600',
            }}>
            {' Sign Up'}
          </StyledText>
        </Row>
      </Section>
    );
  }

  _handleOnChange = (value, name) => {
    this.setState({[name]: value.trim()});
  };
  _signInAsync = async () => {};
}
LoginScreen.propTypes = {};
const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownprops) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
const styles = StyleSheet.create({});
