import { configureStore } from "@reduxjs/toolkit";
import { cartSliceReducer } from "./cartSlice";
import { productSliceReducer } from "./productSlice";

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    product: productSliceReducer,
  },
});
