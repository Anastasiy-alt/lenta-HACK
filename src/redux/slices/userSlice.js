import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserApi, logoutUserApi } from "../../services/API/userApi";
import { setCookie, parseCookie } from "../../utils/coockie";

export const logIn = createAsyncThunk(
  "user/logIn",
  async function ({ form, callback }, { rejectWithValue, dispatch }) {
    try {
      const response = await loginUserApi(form);
      if (callback) {
        callback();
      }
      dispatch(userLogin(form));
      return response;
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

const initialState = {
  form: {
    email: "",
    password: "",
  },
  isAuth: false,
  error: false,
  loader: false,
  isRemember: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.isAuth = true;
      setCookie("email", action.payload.email);
      setCookie("password", action.payload.password);
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
    setRememberMe(state, action) {
      state.isRemember = action.payload;
    },
  },
  extraReducers: {
    [logIn.pending]: (state) => {
      state.loader = true;
      state.error = null;
    },
    [logIn.fulfilled]: (state, action) => {
      if (state.isRemember) {
        setCookie("auth_token", action.payload.auth_token, 7);
      }
      state.loader = false;
    },
    // [logOut.fulfilled]: setFulfilled,

    [logIn.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    [logOut.rejected]: setError,
  },
});

export const {
  userLogin,
  userLogOut,
  setUserFormValue,
  setUserError,
  setRememberMe,
} = userSlice.actions;
export default userSlice.reducer;
