import { takeEvery } from "redux-saga/effects";
import { GET_USERS_START, CREATE_USER_START } from "../actionTypes";
import { getUsersHandler } from "./handlers/getUsers";
import { createUserHandler } from "./handlers/createUser";

export function* watcherSaga() {
  yield takeEvery(GET_USERS_START, getUsersHandler);
  yield takeEvery(CREATE_USER_START, createUserHandler);
}
