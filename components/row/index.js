import React from 'react';
import {View} from 'react-native';

const Row = ({style, children}) => {
  return (
    <View
      testID="rowComponent"
      style={[{flexDirection: 'row', padding: 15}, style]}>
      {children}
    </View>
  );
};
export default Row;
