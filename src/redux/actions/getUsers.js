import {
  GET_USERS_FAILURE,
  GET_USERS_START,
  GET_USERS_SUCCESS,
} from "../actionTypes";

export const getUsers = () => ({ type: GET_USERS_START });
export const getUsersSuccess = (payload) => ({
  type: GET_USERS_SUCCESS,
  payload,
});
export const getUsersFailure = (payload) => ({
  type: GET_USERS_FAILURE,
  payload,
});
