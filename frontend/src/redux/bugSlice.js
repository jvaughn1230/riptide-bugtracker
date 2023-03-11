import { createSlice } from "@reduxjs/toolkit";

const bugSlice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    getBugs: (state) => {},
    createBug: (state, action) => {},
    updateBug: (state, action) => {},
    markComplete: (state, action) => {},
  },
});

export default bugSlice.reducer;
export const { getBugs, createBug, updateBug, markComplete } = bugSlice.actions;
