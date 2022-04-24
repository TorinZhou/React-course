import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartSliceActions } from "../store/cartSlice";

const Cart = (props) => {
  const cartItemList = useSelector((state) => state.cart.cartItemList);
  const dispatch = useDispatch();
  const itemUpdateHandler = (id, type) => {
    dispatch(
      cartSliceActions.updateCartItem({
        id,
        type,
      })
    );
  };
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItemList.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={item}
              onAddAmount={itemUpdateHandler.bind(null, item.id, "ADD")}
              onRemoveAmount={itemUpdateHandler.bind(null, item.id, "REMOVE")}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
