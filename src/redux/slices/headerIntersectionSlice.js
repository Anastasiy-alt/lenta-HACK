import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isIntersection: false,
};

const headerIntersectionSlice = createSlice({
  name: "headerIntersection",
  initialState,
  reducers: {
    isIntersection(state) {
      state.isIntersection = true;
    },
    isIntersectionTop(state) {
      state.isIntersection = false;
    },
  },
});

export const { isIntersection, isIntersectionTop } =
  headerIntersectionSlice.actions;
export default headerIntersectionSlice.reducer;
