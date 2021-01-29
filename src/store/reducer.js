import actionTypes from "./actionTypes";

const reducer = (state = [], action) => {
  if (action.type === actionTypes.addUser) {
    return [...state, action.payload];
  }

  return state;
};

export default reducer;
