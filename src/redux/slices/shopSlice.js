import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCityApi } from "../../services/API/shopApi";

export const getCity = createAsyncThunk(
  "shop/getCity",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await getCityApi();
      // if (!response.ok) {
      //   throw new Error("Error");
      // }
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
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCurrentCity(state, action) {
      state.currentCity = action.payload;
      state.status = false;
    },
  },
  extraReducers: {
    [getCity.pending]: () => {},
    [getCity.fulfilled]: (state, action) => {
      state.cityArr = action.payload.data;
      state.status = true;
      // state.currentCity = action.payload.data[0].city;
    },
    [getCity.rejected]: () => {},
  },
});

export const { setCurrentCity } = shopSlice.actions;
export default shopSlice.reducer;
