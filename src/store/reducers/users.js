const initialState = {
  users: [],
  username: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        username: "",
        users: [...state.users, state.username],
      };
    case "CHANGE_USERNAME":
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
