import { combineReducers } from "@reduxjs/toolkit";
import user from "./userSlice";
import bug from "./bugSlice";
import auth from "./authSlice";

export const rootReducer = combineReducers({
  user,
  bug,
  auth,
});
