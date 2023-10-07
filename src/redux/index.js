import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import modalSlice from "./slices/modalSlice";
import shopSlice from "./slices/shopSlice";
import categoriesSlice from "./slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalSlice,
    shop: shopSlice,
    categories: categoriesSlice,
  },
});
