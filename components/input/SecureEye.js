import React from 'react';
import Icon from '../icon';

const SecureEye = ({secure, onPress}) => {
  return (
    <Icon
      type="Entypo"
      onPress={onPress}
      name={secure ? 'eye' : 'eye-with-line'}
    />
  );
};

export default SecureEye;
