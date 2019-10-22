import {put, takeLeading, call} from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';
import * as types from './actionTypes';
import * as action from './actions';
import {apiCall, PET, REQUEST, PROFILE} from '../../constants/api';

function* addPet(payload) {
  try {
    const pet = yield call(apiCall, PET, 'POST', payload);
  } catch (error) {
    console.log(error.message);
  }
}
function* removePet(payload) {
  try {
    const pet = yield call(apiCall, PET, 'DELETE', payload);
  } catch (error) {
    console.log(error.message);
  }
}
function* updatePet({form}) {
  try {
    const pet = yield call(apiCall, PET + id, 'PUT', form);
  } catch (error) {
    console.log(error.message);
  }
}

function* addRequest(payload) {
  try {
    console.log('payload');
    const pet = yield call(apiCall, REQUEST, 'POST', payload);
  } catch (error) {
    console.log(error.message);
  }
}
function* removeRequest(payload) {
  try {
    const pet = yield call(apiCall, REQUEST, 'DELETE', payload);
  } catch (error) {
    console.log(error.message);
  }
}
function* updateRequest(payload) {
  try {
    const pet = yield call(apiCall, REQUEST, 'PUT', payload);
  } catch (error) {
    console.log(error.message);
  }
}
function* getUserInfo(payload) {
  try {
    const {data} = yield call(apiCall, PROFILE, 'GET');
    yield put(action.gotUserInfo(data));
  } catch (error) {
    console.log(error.message);
  }
}
function* updateUserInfo(payload) {
  try {
    const pet = yield call(apiCall, PROFILE, 'PUT', payload);
  } catch (error) {
    console.log(error.message);
  }
}
export default function* userSagas() {
  yield takeLeading(types.ADD_PET, e => addPet(e.payload));
  yield takeLeading(types.REMOVE_PET, e => removePet(e.payload));
  yield takeLeading(types.UPDATE_PET, e => updatePet(e.payload));
  yield takeLeading(types.ADD_REQUEST, e => addRequest(e.payload));
  yield takeLeading(types.REMOVE_REQUEST, e => removeRequest(e.payload));
  yield takeLeading(types.UPDATE_REQUEST, e => updateRequest(e.payload));
  yield takeLeading(types.GET_USER_INFO, e => getUserInfo(e.payload));
}
