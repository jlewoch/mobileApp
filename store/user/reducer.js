import * as types from './actionTypes';

const INITIAL_STATE = {
  email: '',
  img: '',
  name: '',
  street_address: '',
  city: '',
  province: '',
  pets: [],
  notes: '',
  requests: []
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // PETS
    case types.ADDED_PET:
      return { ...state, pets: state.pets.concat(action.payload) };

    case types.REMOVED_PET:
      return {
        ...state,
        pets: state.pets.filter(i => i._id !== action.payload)
      };

    case types.UPDATED_PET:
      return {
        ...state,
        pets: state.pets.map(i =>
          i._id === action.payload._id ? action.payload : i
        )
      };

    // REQUESTS
    case types.ADDED_REQUEST:
      return { ...state, ...action.payload };

    case types.REMOVED_REQUEST:
      return { ...state, ...action.payload };

    case types.UPDATED_REQUEST:
      return { ...state, ...action.payload };
    case types.GOT_USER_INFO:
      return action.payload;

    default:
      return state;
  }
};

export default user;
