import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers, createUser } from "./usersApi";

export const getUsersAsync = createAsyncThunk("users/getUsers", async () => {
  const response = await getUsers();
  return response.data;
});

export const createUserAsync = createAsyncThunk(
  "users/createUser",
  async (name) => {
    const response = await createUser(name);
    return response.data;
  }
);

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getUsersAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(createUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
