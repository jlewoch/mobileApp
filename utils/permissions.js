import {PermissionsAndroid, Platform} from 'react-native';
import ImagePicker from 'react-native-image-picker';
export const selectPhotoAsync = async () => {
  try {
    if (Platform.OS === 'android') {
      const camera = await checkCameraPermissionAsync();
      const storageRead = await checkStorageReadPermissionAsync();
      const storageWrite = await checkStorageWritePermissionAsync();
      if (!camera) await requestCameraPermissionAsync();
      if (!storageRead) await requestStorageReadPermissionAsync();
      if (!storageWrite) await requestStorageWritePermissionAsync();
      ImagePicker.launchImageLibrary({}, res => console.log(res, 'hell'));
    }
  } catch (error) {
    console.log(error, 'here');
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

const requestStorageReadPermissionAsync = async () => {
  const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  );
  if (result !== PermissionsAndroid.RESULTS.GRANTED)
    throw Error(`Permission selected was ${result}`);
};
const checkStorageReadPermissionAsync = () =>
  PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  );
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
