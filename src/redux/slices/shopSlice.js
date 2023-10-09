import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCityApi } from "../../services/API/shopApi";
import { saveState } from "../../utils/saveState";

export const getCity = createAsyncThunk(
  "shop/getCity",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await getCityApi();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  cityArr: [],
  status: false,
  currentCity: "",
  selectedStore: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCurrentCity(state, action) {
      state.currentCity = action.payload;
      state.status = false;
    },
    setSelectedStore(state, action) {
      state.selectedStore = action.payload;
      saveState(action.payload, "selectedStore");
    },
  },
  extraReducers: {
    [getCity.pending]: () => {},
    [getCity.fulfilled]: (state, action) => {
      state.cityArr = action.payload;
      state.status = true;
      // state.currentCity = action.payload.data[0].city;
    },
    [getCity.rejected]: () => {},
  },
});

export const { setCurrentCity, setSelectedStore } = shopSlice.actions;
export default shopSlice.reducer;
