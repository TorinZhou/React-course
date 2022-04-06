import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
// default context will give me better auto-complition

export const CartContextComponent = (props) => {
  const [totalPrice, setTotalPrice] = useState(999);
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};
  const cartContest = {
    totalPrice: totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  const addToCart = (amount, price) => {
    const classPrice = amount * price;
    setTotalPrice((currentTotalPrice) => currentTotalPrice + classPrice);
  };

  return (
    <CartContext.Provider value={cartContest}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
