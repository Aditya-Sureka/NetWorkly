import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../action/authAction"


// const { loginUser, registerUser } = require("../../action/authAction/index.js");



const initialState = {
    user: [],
    isError: false,
    isSuccess: false,
    iSLoading: false,
    loggedIn: false,
    message: "",
    profileFetched: false,
    connections: [],
    conenctionRequest: [],
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: () => initialState,
        handleLoginUser: (state) => {
            state.message = "hello"
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.iSLoading = true;
                state.message = "Logging in...";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.iSLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.loggedIn = true;
                state.message = "Login is Successful";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.iSLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(registerUser.pending, (state) => {
                state.iSLoading = true;
                state.message = "Registering...";
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.iSLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.loggedIn = true;
                state.message = "Registration is Successful";
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.iSLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    }
})


export default authSlice.reducer;