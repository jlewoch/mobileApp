import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import globalStyles from '../../globalStyles';
import colors from '../../constants/colors';

const StyledText = ({type, style, children}) => {
  return (
    <Text
      testID="textComponent"
      style={[
        {fontFamily: 'Roboto', color: colors.black},
        globalStyles[type],
        style,
      ]}>
      {children}
    </Text>
  );
};
StyledText.propTypes = {
  type: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  children: PropTypes.string,
};
StyledText.defaultProps = {
  type: 'body',
};
export default StyledText;
