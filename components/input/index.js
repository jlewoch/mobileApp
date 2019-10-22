import React, {Component} from 'react';
import propTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import ErrorText from '../errorText';
import Icon, {SuccessError} from '../icon';
import StyledText from '../styledText';
import SecureEye from './SecureEye';
import styles from './styles';
export class Input extends Component {
  static propTypes = {
    errormsg: propTypes.string,
  };
  state = {
    secure: false,
  };
  componentDidMount() {
    // allows secure eye icon to show if secure pass in props
    this.setState({secure: this.props.secure});
  }

  // changes the visibility of text in secure input
  changeVisible = () => this.setState({secure: !this.state.secure});

  // perform validation on blur

  render() {
    const {secure} = this.state;
    const {
      errormsg,
      placeholder,
      label,
      autoFocus,
      icon,
      onChange,
      value,
      onBlur,
      error,
      feedback,
    } = this.props;
    return (
      <View testID="inputComponent" style={{marginVertical: 10}}>
        {/* show label if one is inputed */}
        {label && (
          <StyledText testID="inputLabel" style={styles.label}>
            {label}
          </StyledText>
        )}

        <View style={[styles.inputContainer]}>
          {/* show icon if icon is passed into props */}
          {icon && (
            <Icon
              testID="inputIcon"
              type="Entypo"
              name={icon}
              style={{marginRight: 15}}
            />
          )}
          <TextInput
            testID="inputTextInput"
            autoFocus={autoFocus}
            style={[styles.container, styles.text]}
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secure}
            onBlur={onBlur}
          />
          {/* icon to show if input is valid */}

          {feedback && error !== null && (
            <SuccessError
              testID="inputFeedbackIcon"
              error={error}
              style={{marginHorizontal: 10}}
            />
          )}
          {/* show icon to toggle secure input visibility if this is a secure input */}
          {this.props.secure && (
            <SecureEye
              testID="inputSecureEye"
              secure={secure}
              onPress={this.changeVisible}
            />
          )}
        </View>

        {/* show the error message passed when there is an error*/}
        {error && <ErrorText testID="inputErrMsg">{errormsg}</ErrorText>}
      </View>
    );
  }
}

Input.defaultProps = {
  errormsg: 'Enter Valid Text',
  placeholder: 'EnterText',
};
Input.propTypes = {
  errormsg: propTypes.string,
  placeholder: propTypes.string,
  label: propTypes.string,
  autoFocus: propTypes.bool,
  icon: propTypes.string,
  onChange: propTypes.func,
  value: propTypes.string,
  onBlur: propTypes.func,
  error: propTypes.bool,
  feedback: propTypes.bool,
};
export default Input;
