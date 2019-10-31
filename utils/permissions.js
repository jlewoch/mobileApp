import {PermissionsAndroid, Platform} from 'react-native';
import ImagePicker from 'react-native-image-picker';
const {GRANTED} = PermissionsAndroid.RESULTS;
const {CAMERA, WRITE_EXTERNAL_STORAGE} = PermissionsAndroid.PERMISSIONS;

export const getPhotoAsync = async () => {
  await checkImagePickerPermission();
  const response = await new Promise(function(resolve, reject) {
    ImagePicker.showImagePicker({}, resolve);
  });
  if (
    !response.uri &&
    (response.didCancel || response.error || response.customButton)
  )
    throw Error('Image not selected');
  return response.uri;
};
const checkImagePickerPermission = async () => {
  if (Platform.OS === 'android') {
    const result = await PermissionsAndroid.requestMultiple([
      CAMERA,
      WRITE_EXTERNAL_STORAGE,
    ]);
    if (
      result[CAMERA] !== GRANTED ||
      result[WRITE_EXTERNAL_STORAGE] !== GRANTED
    )
      throw Error('Permission Rejected');
  }
};
