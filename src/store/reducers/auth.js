const {
  createSlice,
  createAsyncThunk,
  createReducer,
  createAction,
} = require("@reduxjs/toolkit");

const initialState = {
  currentUser: undefined,
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData) => {
    return ["Jack", "John"];
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
