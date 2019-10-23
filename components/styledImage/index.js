import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// components
import {Image, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
// constants
import {IMAGE_URI_ROOT} from '../../constants/api';

export const StyledImage = ({
  uri,
  authorization,
  onPress,
  circle,
  containerStyle,
}) => {
  return (
    <TouchableHighlight
      testID="imgWrapper"
      onPress={onPress}
      style={containerStyle}>
      <Image
        testID="imgComponent"
        source={
          uri
            ? {
                uri: `${IMAGE_URI_ROOT}${uri}`,
                method: 'POST',
                headers: {
                  authorization,
                  Pragma: 'no-cache',
                },
              }
            : require('../../assets/images/default-Image.png')
        }
        style={circle ? styles.circleImage : styles.image}
      />
    </TouchableHighlight>
  );
};
StyledImage.propTypes = {
  circle: PropTypes.bool,
  uri: PropTypes.string,
  authorization: PropTypes.string,
  onPress: PropTypes.func,
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
const mapStateToProps = ({auth}) => ({
  authorization: auth.token,
});

export default connect(mapStateToProps)(StyledImage);
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  circleImage: {
    flex: 1,
    width: 75,
    borderRadius: 50,
  },
});
