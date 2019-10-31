import React from 'react';
import {View} from 'react-native';
import colors from '../../constants/colors';

const Section = ({style, children}) => {
  return (
    <View style={[{padding: 15, backgroundColor: colors.white}, style]}>
      {children}
    </View>
  );
};

export default Section;
