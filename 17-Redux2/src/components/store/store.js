import { configureStore } from "@reduxjs/toolkit";
import { cartSliceReducer } from "./cartSlice";
import { productSliceReducer } from "./productSlice";
import { uiSliceReducer } from "./uiSlice";

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    product: productSliceReducer,
    ui: uiSliceReducer,
  },
});
