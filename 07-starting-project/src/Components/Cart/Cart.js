import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const removeItemAmountHandler = (id) => {
    ctx.decreaseAmount(id);
  };
  const addItemAmountHander = (id) => {
    ctx.increaseAmount(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          info={item}
          onRemove={removeItemAmountHandler.bind(null, item.id)}
          onAdd={addItemAmountHander.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  const totalPrice = `$${ctx.totalPrice.toFixed(2)}`;
  const cartHasItem = ctx.items.length !== 0;

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Price</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          CLOSE
        </button>
        {cartHasItem && <button className={classes.button}>ORDER</button>}
      </div>
    </Modal>
  );
};

export default Cart;
