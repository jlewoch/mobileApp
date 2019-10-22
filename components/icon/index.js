import React from 'react';
import PropTypes from 'prop-types';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../constants/colors';

const Icon = ({name, type, size, color, style, onPress}) => {
  return type === 'Entypo' ? (
    <Entypo
      onPress={onPress}
      testID="entypoComponent"
      name={name}
      size={size}
      color={color}
      style={style}
    />
  ) : (
    <AntDesign
      onPress={onPress}
      testID="antComponent"
      name={name}
      size={size}
      color={color}
      style={style}
    />
  );
};
Icon.defaultProps = {
  size: 26,
  color: colors.main,
};
Icon.propTypes = {
  type: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  color: PropTypes.string,
  size: PropTypes.number,
  onPress: PropTypes.func,
};
export default Icon;

export const SuccessError = props =>
  props.error ? (
    <Icon name="closecircle" {...props} color={colors.accentRed} />
  ) : (
    <Icon name="checkcircle" {...props} />
  );
