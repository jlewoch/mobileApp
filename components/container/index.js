import React from 'react';
import {SafeAreaView} from 'react-navigation';

const ContainerSafeView = ({children}) => {
  return <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>;
};

export default ContainerSafeView;
