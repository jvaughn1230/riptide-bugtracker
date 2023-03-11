import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: false,
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signOut: (state) => {
      state.loggedIn = false;
      state.admin = false;
    },
    signIn: (state, action) => {
      const { name, password } = action.payload;
      state.loggedIn = true;
      state.admin = true;
    },
  },
});

export default userSlice.reducer;
export const { signOut, signIn } = userSlice.actions;
