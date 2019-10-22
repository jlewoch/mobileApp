import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
// sagas
import authSagas from './auth/sagas';
import userSagas from './user/sagas';

// reducers
import auth from './auth/reducer';
import user from './user/reducer';

export const reducers = combineReducers({
  auth,
  user
});

export function* rootSagas() {
  yield all([fork(authSagas), fork(userSagas)]);
}
