import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.info.name}</h2>
        <div className={classes.summary}>
          <div className={classes.price}>{props.info.price}</div>
          <div className={classes.amount}>{props.info.amount}</div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
