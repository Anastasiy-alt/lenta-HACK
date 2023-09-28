import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserApi, logoutUserApi } from "../../services/API/userApi";

export const logIn = createAsyncThunk(
  "user/logIn",
  async function (form, { rejectWithValue, dispatch }) {
    try {
      const response = await loginUserApi(form);

      if (!response.ok) {
        throw new Error("Error");
      }
      dispatch(userLogin());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "user/logOut",
  async function (refreshToken, { rejectWithValue, dispatch }) {
    try {
      const response = await logoutUserApi(refreshToken);

      if (!response.ok) {
        throw new Error("Error");
      }
      dispatch(userLogOut(refreshToken));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const setFulfilled = (state, action) => {
  state.status = "resolved";
  if (typeof action.meta.arg === "function") {
    action.meta.arg();
  }
};

const initialState = {
  form: {
    email: null,
    password: null,
  },
  isAuth: false,
  error: null,
  status: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state) {
      state.isAuth = true;
    },
    userLogOut(state) {
      state.form.email = null;
      state.form.password = null;
      state.isAuth = false;
    },
    setUserFormValue(state, action) {
      return {
        ...state,
        form: { ...state.form, [action.payload.name]: action.payload.value },
      };
    },
  },
  extraReducers: {
    [logIn.pending]: (state) => {
      state.status = "loading...";
      state.error = null;
    },
    [logIn.fulfilled]: setFulfilled,
    [logOut.fulfilled]: setFulfilled,

    [logIn.rejected]: setError,
    [logOut.rejected]: setError,
  },
});

export const { userLogin, userLogOut, setUserFormValue } = userSlice.actions;
export default userSlice.reducer;
