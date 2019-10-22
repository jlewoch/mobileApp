import {put, takeLeading, call, fork} from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';
import * as types from './actionTypes';
import * as action from './actions';
import {getUserInfo} from '../user/actions';
import {LOGIN} from '../../constants/api';
function* loginUser(payload) {
  try {
    const user = yield call(apiCall, LOGIN, 'PUT');
  } catch (error) {
    console.log(error.message);
  }
}
function* autoLogin(payload) {
  try {
    yield put(getUserInfo());
    yield put(action.loggedinUser(payload.token));
    payload.navigation.navigate('Home');
  } catch (error) {
    yield call(AsyncStorage.removeItem, 'token');
    payload.navigation.navigate('Auth');
  }
}

export default function* authSagas() {
  yield takeLeading(types.LOGIN_USER, e => loginUser(e.payload));
  yield takeLeading(types.AUTO_LOGIN_USER, e => autoLogin(e.payload));
}
