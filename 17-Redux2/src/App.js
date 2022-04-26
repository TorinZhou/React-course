import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { useEffect } from "react";
import { sendCartThunk, fetchCartThunk } from "./components/store/cartAction";
import { useSelector, useDispatch } from "react-redux";

let isInit = true;

function App() {
  const cartState = useSelector((state) => state.cart);
  // console.log(cartState);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isInit) {
      isInit = false;
      dispatch(fetchCartThunk());
      return;
    }
    dispatch(sendCartThunk(cartState));
  }, [cartState, dispatch]);

  const cartIsShown = useSelector((state) => state.cart.cartIsShown);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsShown && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
