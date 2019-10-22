import React from 'react';
import {View, Text} from 'react-native';

const Section = ({style, children}) => {
  return (
    <View style={[{backgroundColor: 'white', padding: 15}, style]}>
      {children}
    </View>
  );
};

export default Section;
