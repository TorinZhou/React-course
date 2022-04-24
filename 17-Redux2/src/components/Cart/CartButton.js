import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartSliceActions } from "../store/cartSlice";

const CartButton = (props) => {
  const cartItemAmount = useSelector((state) => state.cart.cartItemAmount);
  const dispatch = useDispatch();
  const cartToggleHandler = () => {
    dispatch(cartSliceActions.toggleCart());
  };
  const showCartNumber = cartItemAmount > 0 ? true : false;
  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      {showCartNumber && (
        <span className={classes.badge}>{cartItemAmount}</span>
      )}
    </button>
  );
};

export default CartButton;
