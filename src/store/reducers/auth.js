import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentUser: undefined,
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post("https://api.realworld.io/api/users", {
        user: userData,
      });
      return response.data.user;
    } catch (err) {
      thunkAPI.rejectWithValue(err.response.data.errors);
    }
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
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
