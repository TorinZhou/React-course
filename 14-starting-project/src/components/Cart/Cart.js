import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Spinner from "../UI/Spinner";
import SuccessMessage from "../UI/SuccessMessage";
const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const checkoutHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, { ...item, amount: 1 })}
        />
      ))}
    </ul>
  );
  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={checkoutHandler}>
          Order
        </button>
      )}
    </div>
  );
  const submitOrder = async (userData) => {
    const submitData = {
      items: cartCtx.items,
      amount: cartCtx.totalAmount,
      ...userData,
    };
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://react-test-d6cb2-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }
    } catch (err) {
      console.log(err.message);
    }
    setTimeout(() => {
      setIsSubmitting(false);
      setDidSubmit(true);
    }, 2000);
    cartCtx.clearCart();
  };
  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onClose} onOrder={submitOrder} />
      )}
      {!isCheckout && modalActions}
    </>
  );
  const isSubmittingContent = (
    <>
      <Spinner />
    </>
  );
  const didSubmitContent = (
    <>
      <SuccessMessage message="点餐成功!" />
    </>
  );
  return (
    <Modal onClose={props.onClose}>
      {isSubmitting && isSubmittingContent}
      {!isSubmitting && !didSubmit && cartModalContent}
      {didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
