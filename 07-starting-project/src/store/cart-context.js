import React, { useReducer } from "react";

const CartContext = React.createContext({
  items: [],
  amount: 0,
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
// default context will give me better auto-complition

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const returnedItemsArray = state.items.concat(action.payload);
    const returnedTotalPrice =
      state.totalPrice + action.payload.price * action.payload.amount;
    const returnedAmount = state.amount + action.payload.amount;
    console.log(returnedAmount);
    return {
      ...state,
      amount: returnedAmount,
      items: returnedItemsArray,
      totalPrice: returnedTotalPrice,
    };
  }

  return { items: [], totalPrice: 0 };
};
const defaultCart = { items: [], totalPrice: 0, amount: 0 };

export const CartContextComponent = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCart);

  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: "ADD", payload: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE", payload: id });
  };

  const cartContest = {
    items: cartState.items,
    amount: cartState.amount,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContest}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
