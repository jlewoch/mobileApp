/* 
  component used to display the list component has no items
*/
// dependencies
import React from 'react';
// components
import {TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import StyledText from '../../components/styledText';
import Icon from '../../components/icon';

const Empty = ({iconName, iconType, onPress, message, style}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Icon type={iconType} name={iconName} size={42} />
      <StyledText style={{color: colors.main}}>{message}</StyledText>
    </TouchableOpacity>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    justifyContent: 'center',
    backgroundColor: '#e1e1e1',
    alignItems: 'center',
  },
});
