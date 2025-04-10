import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    allRestaurents:null,
    filterData: null,
  },
  reducers: {
    addAllRestaurents: (state, action) => {
      state.allRestaurents = action.payload;
    },
    addFilterData: (state, action) => {
      state.filterData = action.payload;
    },
  },
});

export const { addAllRestaurents,addFilterData } = searchSlice.actions;

export default searchSlice.reducer;
