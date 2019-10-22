import React from 'react';
import propTypes from 'prop-types';
import styles from './styles';
import Colors from '../../constants/Colors';
import {TouchableOpacity} from 'react-native';
import StyledText from '../styledText';

const Button = ({label, onPress, disabled, style}) => {
  return (
    label && (
      <TouchableOpacity
        testID="btnComponent"
        disabled={disabled}
        onPress={onPress}
        style={[styles.button, style, disabled ? styles.disabled : {}]}>
        <StyledText
          testID="btnLabel"
          style={[styles.label, {color: Colors.white}]}>
          {label}
        </StyledText>
      </TouchableOpacity>
    )
  );
};
Button.propTypes = {
  label: propTypes.string,
  onPress: propTypes.func,
  disabled: propTypes.bool,
  style: propTypes.object,
};
export default Button;
