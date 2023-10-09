import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  type: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpen(state) {
      state.isOpen = true;
    },
    modalClose(state) {
      state.isOpen = false;
    },
    modalType(state, action) {
      state.type = action.payload;
    },
    modalToggle(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const { modalOpen, modalClose, modalType, modalToggle } =
  modalSlice.actions;
export default modalSlice.reducer;
