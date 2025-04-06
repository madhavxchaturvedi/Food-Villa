import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    isOrderSuccess: false,
  },
  reducers: {
    isOrderSuccess: (state) => {
      state.isOrderSuccess = !state.isOrderSuccess;
    },
  },
});

export const { isOrderSuccess } = configSlice.actions;

export default configSlice.reducer;