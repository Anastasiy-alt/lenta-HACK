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
    email: "",
    password: "",
  },
  isAuth: false,
  error: false,
  loader: false,
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
      state.form[action.payload.name] = action.payload.value;
    },
    setUserError(state) {
      state.error = true;
    },
  },
  extraReducers: {
    [logIn.pending]: (state) => {
      state.loader = true;
      state.error = null;
    },
    [logIn.fulfilled]: setFulfilled,
    [logOut.fulfilled]: setFulfilled,

    [logIn.rejected]: setError,
    [logOut.rejected]: setError,
  },
});

export const { userLogin, userLogOut, setUserFormValue, setUserError } =
  userSlice.actions;
export default userSlice.reducer;
