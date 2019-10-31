import React from 'react';
import {View, Picker, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import StyledText from '../styledText';

const Dropdown = ({options, onChange, selected, style, label}) => {
  return (
    <View testID="dropdownComponent" style={[style]}>
      <StyledText testID="dropdownLabel">{label}</StyledText>

      <Picker
        testID="dropdownPicker"
        selectedValue={selected}
        onValueChange={onChange}>
        {options.map(({label, value}, idx) => (
          <Picker.Item
            testID="dropdownOption"
            key={idx}
            label={label}
            value={value}
          />
        ))}
      </Picker>
    </View>
  );
};
Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
  onChange: PropTypes.func,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  label: PropTypes.string,
};
export default Dropdown;
