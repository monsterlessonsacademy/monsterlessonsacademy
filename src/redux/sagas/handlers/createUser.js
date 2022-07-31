import { call, put } from "redux-saga/effects";
import { createUserSuccess, createUserFailure } from "../../actions/createUser";
import createUserRequest from "../requests/createUser";

export function* createUserHandler(action) {
  try {
    const response = yield call(createUserRequest, action.payload);
    yield put(createUserSuccess(response.data));
  } catch (error) {
    yield put(createUserFailure(error.message));
  }
}
