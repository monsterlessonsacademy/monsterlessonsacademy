import actionTypes from "./actionTypes";

export const addUser = () => async (dispatch) => {
  dispatch({ type: actionTypes.addUser, payload: "foo" });
};
