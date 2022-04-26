import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartIsShown: false,
    cartItemAmount: 0,
    cartItemList: [],
  },
  reducers: {
    cartInit(state, action) {
      state.cartIsShown = action.payload?.cartIsShown || false;
      state.cartItemAmount = action.payload?.cartItemAmount || 0;
      state.cartItemList = action.payload?.cartItemList || [];
    },
    showCart(state, action) {
      state.cartIsShown = true;
    },
    hideCart(state, action) {
      state.cartIsShown = false;
    },
    toggleCart(state, action) {
      state.cartIsShown = !state.cartIsShown;
    },
    addItemToCart(state, action) {
      state.cartItemAmount++;
      const itemIndex = state.cartItemList.findIndex((item) => {
        return item.id === action.payload.id;
      });
      console.log(itemIndex);
      if (itemIndex === -1) {
        state.cartItemList.push(action.payload);
      } else {
        state.cartItemList[itemIndex].quantity++;
        state.cartItemList[itemIndex].total +=
          state.cartItemList[itemIndex].price;
      }
    },
    updateCartItem(state, action) {
      // get index
      const itemIndex = state.cartItemList.findIndex((item) => {
        return item.id === action.payload.id;
      });
      // check type
      if (action.payload.type === "ADD") {
        state.cartItemList[itemIndex].quantity++;
        state.cartItemList[itemIndex].total +=
          state.cartItemList[itemIndex].price;
        state.cartItemAmount++;
      }
      if (action.payload.type === "REMOVE") {
        if (state.cartItemList[itemIndex].quantity > 1) {
          state.cartItemList[itemIndex].quantity--;
          state.cartItemList[itemIndex].total -=
            state.cartItemList[itemIndex].price;
          state.cartItemAmount--;
        } else {
          state.cartItemList.splice(itemIndex, 1);
          state.cartItemAmount--;
        }
      }
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export const cartSliceReducer = cartSlice.reducer;
