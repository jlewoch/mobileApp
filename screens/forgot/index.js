import React, {Component} from 'react';
import Header from '../../components/header';
import Section from '../../components/section';
import Input from '../../components/input';
import Button from '../../components/button';
import {checkEmail} from '../../utils/validation';
import Row from '../../components/row';
import StyledText from '../../components/styledText';
import colors from '../../constants/colors';
export default class ForgotPasswordScreen extends Component {
  static navigationOptions = {
    header: () => <Header title="Forgot Password" />,
  };
  state = {email: ''};
  render() {
    const {email} = this.state;
    return (
      <Section testID="forgotComponent" style={{flex: 1}}>
        <Input
          testID="forgotEmailInput"
          label="Email"
          icon="mail"
          value={email}
          errormsg="Please enter a valid email address"
          onChange={e => this.setState({email: e.trim()})}
          validation={checkEmail}
        />
        <Button
          testID="forgotResetBtn"
          disabled={checkEmail(email)}
          label="Reset Password"
        />
        <Row style={{justifyContent: 'center'}}>
          <StyledText type="footnote">Remember your password?</StyledText>
          <StyledText
            testID="forgotLoginBtn"
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
    );
  }
}
