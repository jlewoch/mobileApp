import React from 'react';
import {SafeAreaView} from 'react-navigation';

const ContainerSafeView = ({children, style}) => {
  return <SafeAreaView style={[{flex: 1}, style]}>{children}</SafeAreaView>;
};

export default ContainerSafeView;
