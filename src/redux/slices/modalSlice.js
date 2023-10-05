import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpen(state) {
      state.isOpen = !state.isOpen;
    },
    modalClose(state) {
      state.isOpen = false;
    },
  },
});

export const { modalOpen, modalClose } = modalSlice.actions;
export default modalSlice.reducer;
