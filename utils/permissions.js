import {PermissionsAndroid, Platform} from 'react-native';
import ImagePicker from 'react-native-image-picker';
const GRANTED = PermissionsAndroid.RESULTS.GRANTED;

export const getPhotoAsync = async () => {
  await checkImagePickerPermission();
  const photo = new Promise(function(resolve, reject) {
    ImagePicker.showImagePicker({}, resolve);
  });
  if (response.didCancel || response.error || response.customButton)
    throw Error('Image not selected');
  return photo.uri;
};
const checkImagePickerPermission = async fn => {
  if (Platform.OS === 'android') {
    let camera = await checkCameraPermissionAsync();
    let storageWrite = await checkStorageWritePermissionAsync();
    if (!camera) {
      camera = await requestCameraPermissionAsync();
      if (camera !== GRANTED) throw Error('Access not granted');
    }
    if (!storageWrite) {
      storageWrite = await requestStorageWritePermissionAsync();
      if (storageWrite !== GRANTED) throw Error('Access not granted');
    }
  }
};

const requestCameraPermissionAsync = async () => {
  const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
  );
  if (result !== PermissionsAndroid.RESULTS.GRANTED)
    throw Error(`Permission selected was ${result}`);
};
const checkCameraPermissionAsync = () =>
  PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);

const requestStorageWritePermissionAsync = async () => {
  const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  );
  if (result !== PermissionsAndroid.RESULTS.GRANTED)
    throw Error(`Permission selected was ${result}`);
};
const checkStorageWritePermissionAsync = () =>
  PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  );

const requestLocationPermissionAsync = async () => {
  const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
  if (result !== PermissionsAndroid.RESULTS.GRANTED)
    throw Error(`Permission selected was ${result}`);
};
const checkLocationPermissionAsync = () =>
  PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

const requestCalendarReadPermissionAsync = async () => {
  const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
  );
  if (result !== PermissionsAndroid.RESULTS.GRANTED)
    throw Error(`Permission selected was ${result}`);
};
const checkCalendarReadPermissionAsync = () =>
  PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_CALENDAR);

const requestCalendarWritePermissionAsync = async () => {
  const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_CALENDAR,
  );
  if (result !== PermissionsAndroid.RESULTS.GRANTED)
    throw Error(`Permission selected was ${result}`);
};
const checkCalendarWritePermissionAsync = () =>
  PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_CALENDAR);
