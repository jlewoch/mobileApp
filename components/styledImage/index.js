import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// components
import {Image, StyleSheet, View} from 'react-native';
// constants
import ImageUpload from '../imgUplaodBtn';
import CustomImage from './CustomImage';

export const StyledImage = ({uri, authorization, onPress, circle, style}) => {
  return (
    <View
      testID="imgWrapper"
      style={{height: style.height, width: style.width, position: 'relative'}}>
      {onPress && <ImageUpload onPress={onPress} />}
      <CustomImage
        testID="imgImageComponent"
        circle={circle}
        style={style}
        uri={uri}
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
