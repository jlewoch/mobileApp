import * as types from './actionTypes';

// PET
export const addPet = payload => {
  return {type: types.ADD_PET, payload};
};

export const addedPet = payload => {
  return {type: types.ADDED_PET, payload};
};

export const removePet = payload => {
  return {type: types.REMOVE_PET, payload};
};

export const removedPet = payload => {
  return {type: types.REMOVED_PET, payload};
};

export const updatePet = payload => {
  return {type: types.UPDATE_PET, payload};
};

export const updatedPet = payload => {
  return {type: types.UPDATED_PET, payload};
};

// REQUESTS
export const addRequest = payload => {
  return {type: types.ADD_REQUEST, payload};
};
export const addedRequest = payload => {
  return {type: types.ADDED_REQUEST, payload};
};
export const removeRequest = payload => {
  return {type: types.REMOVE_REQUEST, payload};
};
export const removedRequest = payload => {
  return {type: types.REMOVED_REQUEST, payload};
};
export const updateRequest = payload => {
  return {type: types.UPDATE_REQUEST, payload};
};
export const updatedRequest = payload => {
  return {type: types.UPDATED_REQUEST, payload};
};
// USER
export const updateUserInfo = payload => {
  return {type: types.UPDATE_USER_INFO, payload};
};
export const updatedUserInfo = payload => {
  return {type: types.UPDATED_USER_INFO, payload};
};
export const getUserInfo = payload => {
  return {type: types.GET_USER_INFO, payload};
};
export const gotUserInfo = payload => {
  return {type: types.GOT_USER_INFO, payload};
};
