import React from 'react';
import {View, Text} from 'react-native';
import StyledText from '../styledText';
import colors from '../../constants/colors';

const TextSection = ({label, text}) => {
  return (
    <View style={{paddingVertical: 5}}>
      <StyledText type="headline" style={{color: colors.main}}>
        {label}
      </StyledText>
      <StyledText>{text}</StyledText>
    </View>
  );
};

export default TextSection;
