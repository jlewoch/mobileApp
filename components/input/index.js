import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, StyleSheet} from 'react-native';
import ErrorText from '../errorText';
import Icon, {SuccessError} from '../icon';
import StyledText from '../styledText';
import SecureEye from './SecureEye';
import Row from '../row';
import globalStyles from '../../globalStyles';
import colors from '../../constants/colors';

export class Input extends Component {
  state = {
    secure: false,
  };
  componentDidMount() {
    // if secure is passed as true this will make sure that the field maks value
    this.props.secure && this.setState({secure: this.props.secure});
  }

  // changes the visibility of text in secure input
  changeVisible = () => this.setState({secure: !this.state.secure});

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
      keyboardType,
      multiline,
    } = this.props;
    return (
      <View
        testID="inputComponent"
        style={{
          marginVertical: 10,
        }}>
        {/* show label if one is inputed */}
        {label && (
          <StyledText testID="inputLabel" style={styles.label}>
            {label}
          </StyledText>
        )}

        <Row
          style={{
            alignItems: 'center',
            borderBottomColor: colors.subText,
            borderBottomWidth: 1,
            borderStyle: 'solid',
          }}>
          {/* show icon if icon is passed into props */}
          {icon && (
            <Icon
              testID="inputIcon"
              type="Entypo"
              name={icon}
              style={{marginRight: 10}}
            />
          )}
          <TextInput
            testID="inputTextInput"
            multiline={multiline}
            keyboardType={keyboardType}
            autoFocus={autoFocus}
            style={[{flex: 1}, globalStyles.body]}
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
        </Row>

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
  errormsg: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  autoFocus: PropTypes.bool,
  icon: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
  feedback: PropTypes.bool,
  multiline: PropTypes.bool,
};
export default Input;
const styles = StyleSheet.create({});
