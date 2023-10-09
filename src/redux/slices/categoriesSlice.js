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
  uniqueGroup: [],
  group: {},
  selectedCategories: [],
};

const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setselectedCategories(state, action) {
      state.selectedCategories = action.payload;
    },
  },
  extraReducers: {
    [getCategories.pending]: () => {},
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.uniqueGroup = action.payload
        .map((item) => item.group)
        .filter((item, index, array) => {
          return array.indexOf(item) === index;
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

export const { setselectedCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
