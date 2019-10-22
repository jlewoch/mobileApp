import { AsyncStorage } from 'react-native';
const authRoot = 'http://192.168.1.57:8000/auth';
const apiRoot = 'http://192.168.1.57:8000/api';
export const IMAGE_URI_ROOT = 'http://192.168.1.57:8000/img/';
export const LOGIN = `${authRoot}/login`;
export const SIGNUP = `${authRoot}/signup`;
export const PROFILE = `${apiRoot}/user`;
export const PET = `${apiRoot}/pet/`;
export const REQUEST = `${apiRoot}/request`;
export const apiCall = async (route, method, body) => {
  const authorization = await AsyncStorage.getItem('token');
  console.log(authorization);
  return fetch(route, {
    method,
    body,
    headers: {
      authorization
    }
  }).then(res => res.json());
};
