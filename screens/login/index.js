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
import {checkLength, isEmail} from '../../utils/validation';
import colors from '../../constants/colors';

export class LoginScreen extends Component {
  static navigationOptions = {
    header: () => <Header title="App Name" />,
  };
  state = {
    errors: {email: null},
    values: {email: '', password: ''},
  };
  render() {
    const {values, errors} = this.state;
    return (
      <Section testID="loginComponent">
        <Input
          testID="loginEmailInput"
          placeholder="Email"
          icon="mail"
          value={values.email}
          feedback
          errormsg="Please enter a valid email address"
          error={errors.email}
          onChange={e => this._onChange(e, 'email')}
          onBlur={e => this._onBlur(!isEmail(e), 'email')}
        />
        <Input
          testID="loginPasswordInput"
          placeholder="Password"
          icon="lock"
          value={values.password}
          secure
          onChange={e => this._onChange(e, 'password')}
        />
        <StyledText
          testID="loginForgot"
          type="footnote"
          onPress={() => this.props.navigation.navigate('Forgot')}
          style={styles.link}>
          Forgot Password
        </StyledText>
        <Button
          testID="loginBtn"
          disabled={!isEmail(values.email) || checkLength(values.password, 1)}
          label="Login"
          onPress={this._signInAsync}
        />
        <Row style={{justifyContent: 'center'}}>
          <StyledText type="footnote" style={styles.authOption}>
            Don't have an Account?
          </StyledText>
          <StyledText
            testID="loginSignup"
            type="footnote"
            onPress={() => this.props.navigation.navigate('Signup')}
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
  _onBlur = (value, name) => {
    this.setState({errors: {...this.state.errors, [name]: value}});
  };
  _onChange = (value, name) => {
    this.setState({values: {...this.state.values, [name]: value.trim()}});
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
