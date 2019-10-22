import React from 'react';
import propTypes from 'prop-types';
// components
import {View, StyleSheet, Dimensions} from 'react-native';
import StyledText from '../styledText';
// styling
import colors from '../../constants/colors';
// constants
const {height, width} = Dimensions.get('screen');

const Header = ({title}) => {
  return (
    <View testID="headerComponent" style={styles.container}>
      <StyledText
        testID="headerTitle"
        type="largeTitle"
        style={{color: colors.white, fontWeight: 'bold'}}>
        {title}
      </StyledText>
    </View>
  );
};
Header.propTypes = {
  title: propTypes.string,
};
export default Header;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: height / 4,
    padding: 15,
  },
});
