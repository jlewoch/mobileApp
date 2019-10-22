import React from 'react';
import {View} from 'react-native';

const Row = ({style, children}) => {
  return (
    <View testID="rowComponent" style={[{flexDirection: 'row'}, style]}>
      {children}
    </View>
  );
};
export default Row;
