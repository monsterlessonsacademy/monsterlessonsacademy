const initialState = {
  posts: [],
};

const reducer = (state = initialState, action) => {
  console.log("posts reducer", state, action);
  return state;
};

export default reducer;
