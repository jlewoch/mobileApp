import React, {Component, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, StyleSheet, Animated} from 'react-native';
import ErrorText from '../errorText';
import Icon, {SuccessError} from '../icon';
import StyledText from '../styledText';
import SecureEye from './SecureEye';
import Row from '../row';
import globalStyles from '../../globalStyles';
import colors from '../../constants/colors';

export class Input extends Component {
  _animatedLabelPosition = new Animated.Value(12);
  _animatedLabelSize = new Animated.Value(18);
  state = {
    secure: false,
    error: null,
    focused: false,
  };
  componentDidMount() {
    const {secure, value} = this.props;
    // if secure is passed as true this will make sure that the field maks value
    secure && this.setState({secure: secure});

    if (value && value.length > 0) {
      this._animateLabelUp();
    }
  }

  render() {
    const {secure, error, focused} = this.state;
    const {
      errormsg,
      label,
      autoFocus,
      icon,
      onChange,
      validation,
      keyboardType,
      multiline,
      value,
    } = this.props;
    const isFocusedOrNotEmpty = focused || (value && value.length > 0);

    return (
      <View
        testID="inputComponent"
        style={{
          marginVertical: 10,
        }}>
        <Row style={styles.inputContainer}>
          {/* show label if one is specified */}

          {label && (
            <StyledText
              testID="inputLabel"
              style={[
                styles.inputLabel,
                icon ? styles.inputLabelWithIcon : {},
                {
                  top: this._animatedLabelPosition,
                  fontSize: this._animatedLabelSize,
                },
                isFocusedOrNotEmpty ? styles.inputLabelFocused : {},
              ]}>
              {label}
            </StyledText>
          )}

          {/* show icon if icon is passed into props */}
          {icon && <Icon testID="inputIcon" type="Entypo" name={icon} />}
          <TextInput
            testID="inputTextInput"
            multiline={multiline}
            keyboardType={keyboardType}
            autoFocus={autoFocus}
            numberOfLines={1}
            style={[
              styles.input,
              isFocusedOrNotEmpty ? styles.inputFocused : {},
            ]}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secure}
            onBlur={this._handleOnBlur}
            onFocus={this._animateLabelUp}
          />
          {/* icon to show if input is valid */}
          {validation && error !== null && (
            <SuccessError
              testID="inputFeedbackIcon"
              error={error}
              style={styles.validationIcon}
            />
          )}
          {/* show icon to toggle secure input visibility if this is a secure input */}
          {this.props.secure && (
            <SecureEye
              testID="inputSecureEye"
              secure={secure}
              onPress={this._changeSecureVisible}
            />
          )}
        </Row>

        {/* show the error message passed when there is an error*/}
        {error && <ErrorText testID="inputErrMsg">{errormsg}</ErrorText>}
      </View>
    );
  }

  _handleOnBlur = () => {
    // if validation is passed set error value
    const {validation, value} = this.props;
    validation && this.setState({error: validation(value)});
    if (this.props.value.length === 0) this._animateLabeldown();
  };
  _animateLabelUp = () => {
    // moves and changes size of label when the input is focused or the value is not blank
    Animated.parallel([
      Animated.timing(this._animatedLabelPosition, {
        toValue: -12,
        duration: 200,
      }),
      Animated.timing(this._animatedLabelSize, {
        toValue: 16,
        duration: 200,
      }),
    ]).start();
    // sets focused to apply focused styles
    this.setState({focused: true});
  };
  _animateLabeldown = () => {
    // moves and changes size of label when there is no value or the input is not focused
    Animated.parallel([
      Animated.timing(this._animatedLabelPosition, {
        toValue: 12,
        duration: 200,
      }),
      Animated.timing(this._animatedLabelSize, {
        toValue: 18,
        duration: 200,
      }),
    ]).start();
    // sets focused to remove focused styles
    this.setState({focused: false});
  };
  // changes the visibility of text in secure input
  _changeSecureVisible = () => this.setState({secure: !this.state.secure});
}

Input.defaultProps = {
  errormsg: 'Enter Valid Text',
  placeholder: 'EnterText',
};
Input.propTypes = {
  errormsg: PropTypes.string,
  label: PropTypes.string,
  autoFocus: PropTypes.bool,
  icon: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  validation: PropTypes.func,
  multiline: PropTypes.bool,
};
export default Input;
const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  input: {
    padding: 0,
    margin: 10,
    ...globalStyles.body,
    flex: 1,
    borderBottomColor: colors.subText,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  inputFocused: {
    borderBottomColor: colors.main,
  },
  inputLabel: {position: 'absolute', left: 10, color: colors.subText},
  inputLabelWithIcon: {left: 37},
  inputLabelFocused: {color: colors.main},
  validationIcon: {marginHorizontal: 10},
});
