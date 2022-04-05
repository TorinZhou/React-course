import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "test", amount: 2, price: 12.99 }].map((item) => (
        <li>item.name</li>
      ))}
    </ul>
  );

  return (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.6</span>
      </div>
      <div className={classes.action}>
        <button className={classes["button--alt"]}>CLOSE</button>
        <button className={classes.button}>ORDER</button>
      </div>
    </>
  );
};

export default Cart;
