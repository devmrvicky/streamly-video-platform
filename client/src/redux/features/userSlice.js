import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
  status: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
      state.status = true;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.status = false;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
      state.status = false;
    },
  },
});

export const { loginPending, loginSuccess, loginFailure, logoutSuccess } =
  userSlice.actions;
export default userSlice.reducer;
