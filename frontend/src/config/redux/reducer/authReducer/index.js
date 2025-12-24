import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../action/authAction/index.js";

// const { loginUser, registerUser } = require("../../action/authAction/index.js");

const initialState = {
  user: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  loggedIn: false,
  message: "",
  profileFetched: false,
  connections: [],
  connectionRequest: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
    handleLoginUser: (state) => {
      state.message = "hello";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.message = "Logging in...";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.loggedIn = true;
        state.message = "Login is Successful";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.message = "Registring...";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.loggedIn = true;
        state.message = action.payload?.message || "Registration Successful";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        const errorMessage =
          action.payload?.message || action.payload || "Registration Failed";
        state.message =
          typeof errorMessage === "string"
            ? errorMessage
            : JSON.stringify(errorMessage);
      });
  },
});

export default authSlice.reducer;
