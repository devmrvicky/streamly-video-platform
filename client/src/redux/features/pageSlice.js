import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  asideCollapse: true,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    asideToggle: (state) => {
      state.asideCollapse = !state.asideCollapse;
    },
  },
});

export const { asideToggle } = pageSlice.actions;
export default pageSlice.reducer;
