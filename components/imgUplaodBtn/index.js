import React from 'react';
import {StyleSheet} from 'react-native';
import {getPhotoAsync} from '../../utils/permissions';
import Icon from '../icon';

const ImageUpload = ({onPress}) => {
  return (
    <Icon
      size={46}
      type="Entypo"
      name="upload-to-cloud"
      onPress={async () => {
        try {
          const uri = await getPhotoAsync();
          return onPress(uri);
        } catch (error) {
          console.log(error);
          return onPress(false);
        }
      }}
      style={styles.uploadBtn}
    />
  );
};

export default ImageUpload;
const styles = StyleSheet.create({
  uploadBtn: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    zIndex: 1,
  },
});
