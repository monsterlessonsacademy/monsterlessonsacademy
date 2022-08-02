import { getUsersFailure, getUsersSuccess } from "../../actions/getUsers";
import { call, put } from "redux-saga/effects";
import getUsersRequest from "../requests/getUsers";

export function* getUsersHandler() {
  try {
    const response = yield call(getUsersRequest);
    yield put(getUsersSuccess(response.data));
  } catch (error) {
    yield put(getUsersFailure(error.message));
  }
}
