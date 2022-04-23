import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAutheticated: false,
    loginFormIsShown: false,
  },
  reducers: {
    login(state, action) {
      state.isAutheticated = true;
    },
    logout(state, action) {
      state.isAutheticated = false;
    },
    showLoginForm(state) {
      state.loginFormIsShown = true;
    },
    hideLoginForm(state) {
      state.loginFormIsShown = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
