import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  console.log("calling cart");
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "test", amount: 2, price: 12.99 }].map((item) => (
        <li>item.name</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.6</span>
      </div>
      <div className={classes.action}>
        <button className={classes["button--alt"]}>CLOSE</button>
        <button className={classes.button}>ORDER</button>
      </div>
    </Modal>
  );
};

export default Cart;
