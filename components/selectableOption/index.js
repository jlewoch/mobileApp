import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import StyledText from '../styledText';
import colors from '../../constants/colors';

const SelectableOption = ({
  label,
  type,
  iconName,
  iconType,
  onChange,
  selected,
}) => {
  return (
    <TouchableHighlight
      underlayColor="none"
      style={[
        styles.wrapper,
        selected ? styles.selectedWrapper : styles.deSelectedWrapper,
      ]}
      onPress={() => onChange(!selected)}>
      {type === 'icon' && iconName ? (
        <Icon name={iconName} type={iconType} />
      ) : (
        <StyledText
          style={[
            styles.text,
            selected ? styles.selectedText : styles.deSelectedText,
          ]}>
          {label}
        </StyledText>
      )}
    </TouchableHighlight>
  );
};

export default SelectableOption;

const styles = StyleSheet.create({
  wrapper: {
    margin: 5,
    padding: 10,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  text: {textAlign: 'center'},
  selectedText: {color: colors.main},
  deSelectedText: {color: colors.subText},
  selectedWrapper: {borderColor: colors.main},
  deSelectedWrapper: {borderColor: colors.subText},
});
