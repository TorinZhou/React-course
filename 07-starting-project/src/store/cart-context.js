import React, { useReducer } from "react";

const CartContext = React.createContext({
  items: [],
  amount: 0,
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  increaseAmount: () => {},
  decreaseAmount: () => {},
});
// default context will give me better auto-completion

const defaultCart = { items: [], totalPrice: 0, amount: 0 };
const cartReducer = (state, action) => {
  const updateItem = (itemsState, index, item) => {
    const updatedItemAmount = itemsState[index].amount + item.amount;
    return updatedItemAmount;
  };
  const updateItems = (itemsState, item) => {
    return itemsState.concat(item);
  };
  const getReturnedItemsArray = (itemsState, index, item) => {
    if (index < 0) {
      return updateItems(itemsState, item);
    } else {
      const amount = updateItem(itemsState, index, item);
      const itemsArray = structuredClone(itemsState);
      itemsArray[index].amount = amount;
      return itemsArray;
    }
  };

  if (action.type === "ADD") {
    const returnedTotalPrice =
      state.totalPrice + action.payload.price * action.payload.amount;
    const returnedAmount = state.amount + action.payload.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const returnedItemsArray = getReturnedItemsArray(
      state.items,
      existingCartItemIndex,
      action.payload
    );
    return {
      items: returnedItemsArray,
      totalPrice: returnedTotalPrice,
      amount: returnedAmount,
    };
  }
  if (action.type === "INCREASE") {
    const returnedItemsArray = structuredClone(state.items);
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload
    );
    returnedItemsArray[existingCartItemIndex].amount += 1;

    return {
      items: returnedItemsArray,
      totalPrice: state.totalPrice + state.items[existingCartItemIndex].price,
      amount: state.amount + 1,
    };
  }
  if (action.type === "DECREASE") {
    console.log("-1");
  }

  return { items: [], totalPrice: 0, amount: 0 };
};

export const CartContextComponent = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCart);
  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: "ADD", payload: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE", payload: id });
  };
  const increaseAmount = (id) => {
    dispatchCartState({ type: "INCREASE", payload: id });
  };
  const decreaseAmount = (id) => {
    dispatchCartState({ type: "DECREASE", payload: id });
  };
  const cartContest = {
    items: cartState.items,
    amount: cartState.amount,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    increaseAmount: increaseAmount,
    decreaseAmount: decreaseAmount,
  };
  return (
    <CartContext.Provider value={cartContest}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
