import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";
import configSlice from "./configSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    config: configSlice,
    search: searchSlice,
  },
});

export default store;
