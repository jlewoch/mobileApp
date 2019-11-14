import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import StyledText from '../styledText';
import colors from '../../constants/colors';
import Icon from '../icon';
import {StyledImage} from '../styledImage';

const SelectableOption = ({
  label,
  type,
  iconName,
  iconType,
  onChange,
  selected,
  uri,
}) => {
  const selectbody = type => {
    switch (type) {
      case 'icon':
        return (
          <Icon
            name={iconName}
            type={iconType}
            color={selected ? colors.main : colors.subText}
          />
        );
      case 'image':
        <StyledImage uri={uri} circle />;
      default:
        return (
          <StyledText
            style={[
              styles.text,
              selected ? styles.selectedText : styles.deSelectedText,
            ]}>
            {label}
          </StyledText>
        );
    }
  };
  return (
    <TouchableHighlight
      underlayColor="#fff"
      style={[
        styles.wrapper,
        selected ? styles.selectedWrapper : styles.deSelectedWrapper,
      ]}
      onPress={() => onChange(!selected)}>
      {selectbody(type)}
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
