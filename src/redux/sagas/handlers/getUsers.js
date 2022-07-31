import { call, put } from "redux-saga/effects";
import { getUsersFailure, getUsersSuccess } from "../../actions/getUsers";
import getUsersRequest from "../requests/getUsers";

export function* getUsersHandler() {
  try {
    const response = yield call(getUsersRequest);
    const { data } = response;
    yield put(getUsersSuccess(data));
  } catch (error) {
    yield put(getUsersFailure(error.message));
  }
}
