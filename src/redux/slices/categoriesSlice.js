import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategoriesApi } from "../../services/API/categoriesApi";

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async function (_, { rejectWithValue }) {
    try {
      const response = await getCategoriesApi();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  categories: [],
  uniqueGroup: null,
  group: {},
};

const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setUniqGroup(state, action) {},
  },
  extraReducers: {
    [getCategories.pending]: () => {},
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.uniqueGroup = action.payload.filter((item, index, array) => {
        return array.findIndex((val) => val.group === item.group) === index;
      });
      state.group = action.payload.reduce((result, item) => {
        (result[item.group] = result[item.group] || []).push(item.category);
        return result;
      }, {});
    },
    [getCategories.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const { modalOpen } = categoriesSlice.actions;
export default categoriesSlice.reducer;
