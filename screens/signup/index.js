import React, {Component} from 'react';
// components
import {KeyboardAvoidingView, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/header';
import Row from '../../components/row';
import StyledText from '../../components/styledText';
import Button from '../../components/button';
import Input from '../../components/input';
import Section from '../../components/section';
import colors from '../../constants/colors';
import {
  checkName,
  checkEmail,
  checkCity,
  checkPassword,
} from '../../utils/validation';
import {deviceHeight} from '../../constants/dimensions';

export default class SignupScreen extends Component {
  static navigationOptions = {
    header: () => <Header title="Signup" />,
  };
  state = {
    name: '',
    email: '',
    city: '',
    password: '',
    confirm: '',
  };
  render() {
    const {name, email, city, password, confirm} = this.state;
    const cantSubmit =
      checkEmail(email) ||
      checkCity(city) ||
      checkName(name) ||
      checkPassword(password) ||
      confirm !== password;
    return (
      <KeyboardAvoidingView
        testID="signupComponent"
        style={{flex: 1}}
        behavior="padding"
        enabled
        keyboardVerticalOffset={deviceHeight / 4}>
        <ScrollView keyboardShouldPersistTaps="always" style={{flex: 1}}>
          <Section style={{flex: 1}}>
            <Input
              testID="signupNameInput"
              label="Name"
              icon="user"
              value={name}
              errormsg="Please enter your name"
              onChange={e => {
                this._onChange(e, 'name');
              }}
              validation={checkName}
            />
            <Input
              testID="signupEmailInput"
              label="Email"
              icon="mail"
              value={email}
              errormsg="Please enter a valid email address"
              onChange={e => this._onChange(e.trim(), 'email')}
              validation={checkEmail}
            />
            <Input
              testID="signupCityInput"
              label="City"
              icon="address"
              value={city}
              errormsg="Please enter a city name"
              onChange={e => this._onChange(e, 'city')}
              validation={checkCity}
            />

            <Input
              testID="signupPasswordInput"
              label="Password"
              icon="lock"
              value={password}
              errormsg={'Password must be minimum 8 characters'}
              secure
              onChange={e => this._onChange(e, 'password')}
              validation={checkPassword}
            />
            <Input
              testID="signupConfirmInput"
              label="Confirm Password"
              icon="lock"
              value={confirm}
              errormsg="Password and confirm password do not match"
              secure
              onChange={e => this._onChange(e, 'confirm')}
              validation={() => confirm !== password}
            />

            <Button testID="signupBtn" disabled={cantSubmit} label="Signup" />
            <Row style={{justifyContent: 'center'}}>
              <StyledText type="footnote">Already have an Account?</StyledText>
              <StyledText
                testID="signupLogin"
                type="footnote"
                onPress={() => this.props.navigation.goBack()}
                style={{
                  color: colors.main,
                  fontWeight: '600',
                }}>
                {' Login'}
              </StyledText>
            </Row>
          </Section>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  _onChange = (value, name) => {
    this.setState({[name]: value});
  };
}
const styles = StyleSheet.create({});
