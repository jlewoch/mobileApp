import React, {Component} from 'react';
// components
import {KeyboardAvoidingView, Dimensions, StyleSheet} from 'react-native';
import Header from '../../components/header';
import Row from '../../components/row';
import StyledText from '../../components/styledText';
import Button from '../../components/button';
import Input from '../../components/input';
import Section from '../../components/section';
import ProvinceDropdown from '../../components/provinceDropdown';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '../../constants/colors';
import {
  checkName,
  checkEmail,
  checkCity,
  checkPassword,
} from '../../utils/validation';
const {height} = Dimensions.get('window');

export default class SignupScreen extends Component {
  static navigationOptions = {
    header: () => <Header title="Signup" />,
  };
  state = {
    errors: {
      name: null,
      email: null,
      city: null,
      password: null,
      confirm: null,
    },
    values: {
      name: '',
      email: '',
      city: '',
      password: '',
      confirm: '',
    },
  };
  render() {
    const {errors, values} = this.state;
    const cantSubmit =
      checkEmail(values.email) ||
      checkCity(values.city) ||
      checkName(values.name) ||
      checkPassword(values.password) ||
      values.confirm !== values.password;
    return (
      <KeyboardAvoidingView
        testID="signupComponent"
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
        behavior="padding"
        enabled
        keyboardVerticalOffset={height / 4}>
        <ScrollView keyboardShouldPersistTaps="always" style={{flex: 1}}>
          <Section style={{flex: 1}}>
            <Input
              testID="signupNameInput"
              feedback
              autoFocus
              placeholder="Name"
              icon="user"
              value={values.name}
              error={errors.name}
              errormsg="Please enter your name"
              onChange={e => {
                this._onChange(e, 'name');
              }}
              onBlur={() => {
                this._validate(checkName(values.name), 'name');
              }}
            />
            <Input
              testID="signupEmailInput"
              feedback
              placeholder="Email"
              icon="mail"
              value={values.email}
              error={errors.email}
              errormsg="Please enter a valid email address"
              onChange={e => this._onChange(e.trim(), 'email')}
              onBlur={() => {
                this._validate(checkEmail(values.email), 'email');
              }}
            />
            <Input
              testID="signupCityInput"
              feedback
              placeholder="City"
              icon="address"
              value={values.city}
              error={errors.city}
              errormsg="Please enter a city name"
              onChange={e => this._onChange(e, 'city')}
              onBlur={() => {
                this._validate(checkCity(values.city), 'city');
              }}
            />

            <Input
              testID="signupPasswordInput"
              feedback
              placeholder="Password"
              icon="lock"
              value={values.password}
              error={errors.password}
              errormsg={'Password must be minimum 8 characters'}
              secure
              onChange={e => this._onChange(e, 'password')}
              onBlur={() => {
                this._validate(checkPassword(values.password), 'password');
              }}
            />
            <Input
              testID="signupConfirmInput"
              feedback
              placeholder="Confirm Password"
              icon="lock"
              value={values.confirm}
              error={errors.confirm}
              errormsg="Password and confirm password do not match"
              secure
              onChange={e => this._onChange(e, 'confirm')}
              onBlur={() => {
                this._validate(values.confirm !== values.password, 'confirm');
              }}
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

  _validate = (value, name) => {
    this.setState({errors: {...this.state.errors, [name]: value}});
  };
  _onChange = (value, name) => {
    this.setState({values: {...this.state.values, [name]: value}});
  };
}
const styles = StyleSheet.create({});
