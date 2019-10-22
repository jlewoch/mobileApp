import * as types from './actionTypes';

const INITIAL_STATE = {
  token: null
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGGEDIN_USER:
      return { ...state, token: action.payload };

    default:
      return state;
  }
};

export default auth;
