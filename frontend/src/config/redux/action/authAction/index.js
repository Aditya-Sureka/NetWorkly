import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientServer } from "@/config";

export const loginUser = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
      const response = await clientServer.post("/login", {
        email: user.email,
        password: user.password,
      });

      if (!response.data.token) {
        localStorage.setItem("token", response.data.token);
      } else {
        return thunkAPI.rejectWithValue({
          message: "token not provided",
        });
      }


      return thunkAPI.fulfillWithValue({ token: response.data.token});

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const registerUser = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {})