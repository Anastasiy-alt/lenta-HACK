import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getStatisicApi, getForecastApi } from "../../services/API/cardApi";

export const getStatisticData = createAsyncThunk(
  "card/getStatisticData",
  async function ({ currentCardName, currentStoreArr }, { rejectWithValue }) {
    try {
      const response = await getStatisicApi({
        currentCardName,
        currentStoreArr,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getForecastData = createAsyncThunk(
  "card/getForecastData",
  async function ({ currentCardName, currentStoreArr }, { rejectWithValue }) {
    try {
      const response = await getForecastApi({
        currentCardName,
        currentStoreArr,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  cardList: [],
  currentCardName: "",
  statisticData: [],
  forecastData: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCardList(state, action) {
      state.cardList = [];
      state.cardList = action.payload;
    },
    setCardName(state, action) {
      state.currentCardName = "";
      state.currentCardName = action.payload;
    },
  },
  extraReducers: {
    [getStatisticData.pending]: () => {},
    [getForecastData.pending]: () => {},

    [getForecastData.fulfilled]: (state, action) => {
      state.forecastData = [];
      state.forecastData = action.payload;
      console.log(action.payload);
    },
    [getStatisticData.fulfilled]: (state, action) => {
      state.statisticData = [];
      state.statisticData = action.payload;
      console.log(action.payload);
    },
    [getForecastData.rejected]: () => {
      console.log("rejected");
    },
    [getStatisticData.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const { setCardList, setCardName } = cardSlice.actions;
export default cardSlice.reducer;
