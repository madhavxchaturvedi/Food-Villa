import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";
import configSlice from "./configSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    config: configSlice,
  },
});

export default store;
