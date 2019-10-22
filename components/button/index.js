import React from 'react';
import propTypes from 'prop-types';
import colors from '../../constants/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import StyledText from '../styledText';

const Button = ({label, onPress, disabled, style}) => {
  return (
    label && (
      <TouchableOpacity
        testID="btnComponent"
        disabled={disabled}
        onPress={onPress}
        style={[
          {
            padding: 10,
            backgroundColor: disabled ? colors.subText : colors.accentOrange,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
          },
          style,
        ]}>
        <StyledText
          testID="btnLabel"
          type="title3"
          style={{fontWeight: 'bold', color: colors.white}}>
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
