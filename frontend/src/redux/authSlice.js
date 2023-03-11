import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    admin: false,
    loggedIn: false,
  },
  reducers: {
    signIn: (state, action) => {
      const { userName, password } = action.payload;
      // !Change once backend is connected
      state.loggedIn = true;
      state.admin = true;
    },
    signOut: (state) => {
      state.loggedIn = false;
      state.admin = false;
    },
    createUser: (state, action) => {
      // !Need to complete backend then complete this
    },
  },
});

export default authSlice.reducer;

export const { signIn, signOut, createuser } = authSlice.actions;
