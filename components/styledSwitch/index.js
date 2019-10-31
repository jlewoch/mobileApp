import React from 'react';
import PropTypes from 'prop-types';
// components
import {Switch} from 'react-native';
import Row from '../row';
import StyledText from '../styledText';
import colors from '../../constants/colors';

const StyledSwitch = ({label, onChange, value}) => {
  return (
    <Row testID="switchComponent">
      <Switch
        testID="switchComponentSwitch"
        onValueChange={onChange}
        value={value}
      />
      <StyledText
        type="callout"
        style={{color: value ? colors.main : colors.black}}
        testID="switchLabel">
        {label}
      </StyledText>
    </Row>
  );
};
StyledSwitch.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};
export default StyledSwitch;
