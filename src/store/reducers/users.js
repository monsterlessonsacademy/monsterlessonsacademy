const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
  username: "",
  search: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state) {
      state.users.push(state.username);
      state.username = "";
    },
    changeUsername(state, action) {
      state.username = action.payload;
    },
    changeSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { addUser, changeSearch, changeUsername } = usersSlice.actions;
export default usersSlice.reducer;
