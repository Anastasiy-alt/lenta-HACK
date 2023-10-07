import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardList: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCardList(state, action) {
      state.cardList = action.payload;
    },
  },
});

export const { setCardList } = cardSlice.actions;
export default cardSlice.reducer;
