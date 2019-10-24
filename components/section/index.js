import React from 'react';
import {View} from 'react-native';

const Section = ({style, children}) => {
  return <View style={[{padding: 15}, style]}>{children}</View>;
};

export default Section;
