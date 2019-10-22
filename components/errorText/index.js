import React from 'react';
import PropTypes from 'prop-types';
import StyledText from '../styledText';
import colors from '../../constants/colors';
const ErrorText = ({children}) => {
  return (
    <StyledText
      testID="errorTextComponent"
      style={{paddingTop: 3, color: colors.accentRed}}>
      {children}
    </StyledText>
  );
};
ErrorText.proptypes = {
  children: PropTypes.string,
};
export default ErrorText;
