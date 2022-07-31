import {
  CREATE_USER_FAILURE,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
} from "../actionTypes";

export const createUser = (payload) => ({ type: CREATE_USER_START, payload });
export const createUserSuccess = (payload) => ({
  type: CREATE_USER_SUCCESS,
  payload,
});
export const createUserFailure = (payload) => ({
  type: CREATE_USER_FAILURE,
  payload,
});
