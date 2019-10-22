import * as types from './actionTypes';

// Login
export const autoLoginUser = payload => ({
  type: types.AUTO_LOGIN_USER,
  payload
});
export const loginUser = payload => ({ type: types.LOGIN_USER, payload });
export const loggedinUser = payload => ({
  type: types.LOGGEDIN_USER,
  payload
});
