import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    isLoggedIn: false,
    userEmail: "",
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userEmail = action.payload.userEmail;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userEmail = null;
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice;
