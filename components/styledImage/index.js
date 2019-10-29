import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// components
import {Image, StyleSheet, View} from 'react-native';
// constants
import {IMAGE_URI_ROOT} from '../../constants/api';
import ImageUpload from '../imgUplaodBtn';

export const StyledImage = ({uri, authorization, onPress, circle, style}) => {
  console.log(style.width, style.height);
  return (
    <View
      testID="imgWrapper"
      style={{height: style.height, width: style.width, position: 'relative'}}>
      {onPress && <ImageUpload onPress={onPress} />}
      <Image
        testID="imgComponent"
        source={uri ? {uri} : require('../../assets/images/default-Image.png')}
        style={[circle ? styles.circleImage : styles.image, style]}
      />
    </View>
  );
};
StyledImage.propTypes = {
  circle: PropTypes.bool,
  uri: PropTypes.string,
  authorization: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
const mapStateToProps = ({auth}) => ({
  authorization: auth.token,
});

export default connect(mapStateToProps)(StyledImage);
const styles = StyleSheet.create({
  container: {position: 'relative'},
  circleImage: {
    flex: 1,
    width: 75,
    borderRadius: 50,
  },
});
