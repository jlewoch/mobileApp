import React from 'react';
import PropTypes from 'prop-types';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../constants/colors';

const Icon = ({name, type, size, color, style, onPress}) => {
  const selectIcon = () => {
    switch (type) {
      case 'Entypo':
        return (
          <Entypo
            onPress={onPress}
            testID="entypoComponent"
            name={name}
            size={size}
            color={color}
            style={style}
          />
        );
      case 'FontAwesome5':
        return (
          <FontAwesome5
            onPress={onPress}
            testID="fontAwesome5Component"
            name={name}
            size={size}
            color={color}
            style={style}
          />
        );
      case 'FontAwesome':
        return (
          <FontAwesome
            onPress={onPress}
            testID="fontAwesomeComponent"
            name={name}
            size={size}
            color={color}
            style={style}
          />
        );

      default:
        return (
          <AntDesign
            onPress={onPress}
            testID="antComponent"
            name={name}
            size={size}
            color={color}
            style={style}
          />
        );
    }
  };
  return selectIcon(type);
};
Icon.defaultProps = {
  size: 26,
  color: colors.main,
  type: '',
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
