import { createSlice } from "@reduxjs/toolkit";

const productList = [
  {
    id: "p1",
    title: "Test",
    price: 6.99,
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    title: "Test2",
    price: 7.99,
    description: "This is the second product - amazing!",
  },
];

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: productList,
  },
  reducers: {},
});

export const productSliceReducer = productSlice.reducer;
export const productSliceAction = productSlice.actions;
