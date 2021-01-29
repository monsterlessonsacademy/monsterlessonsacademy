import actionTypes from "./actionTypes";

export const addUser = (username) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.addUser, payload: username });
    console.log("username", username);
    const response = await fetch("http://localhost:3004/users", {
      method: "POST",
      body: JSON.stringify({
        username,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch({ type: actionTypes.addUserSuccess, payload: data });
  };
};
