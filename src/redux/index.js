import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import modalSlice from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalSlice,
  },
});
