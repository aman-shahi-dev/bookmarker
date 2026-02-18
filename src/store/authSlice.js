import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createAccount,
  loginUser,
  getCurrentUser,
} from "../services/appwrite/appwrite.js";

export const login = createAsyncThunk("auth/login", async (data) => {
  await loginUser(data);
  return await getCurrentUser();
});

export const signup = createAsyncThunk("auth/signup", async (data) => {
  await createAccount(data);
  return await getCurrentUser();
});

export const checkAuth = createAsyncThunk("auth/check", async () => {
  return await getCurrentUser();
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: false,
    userData: null,
    loading: true,
  },
  reducers: {
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = true;
          state.userData = action.payload;
        } else {
          state.status = false;
          state.userData = null;
        }
        state.loading = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.status = false;
        state.loading = false;
      })
      .addMatcher(
        (action) =>
          [login.fulfilled.type, signup.fulfilled.type].includes(action.type),
        (state, action) => {
          state.status = true;
          state.userData = action.payload;
          state.loading = false;
        },
      )
      .addMatcher(
        (action) =>
          [login.pending.type, signup.pending.type].includes(action.type),
        (state) => {
          state.loading = true;
        },
      )
      .addMatcher(
        (action) =>
          [login.rejected.type, signup.rejected.type].includes(action.type),
        (state) => {
          state.loading = false;
        },
      );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
