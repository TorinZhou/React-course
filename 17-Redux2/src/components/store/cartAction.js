import { uiSliceAction } from "./uiSlice";
import { cartSliceActions } from "./cartSlice";

export const sendCartThunk = (cartState) => {
  return async (dispatch) => {
    const pushCartToBackend = async () => {
      dispatch(
        uiSliceAction.showNotification({
          status: "pending",
          title: "Sending",
          message: "Sending cart data!",
        })
      );
      const res = await fetch(
        "https://reduxtest-a157c-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartState),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error("Something went South!");
      }
      dispatch(
        uiSliceAction.showNotification({
          status: "success",
          title: "success",
          message: "Sending cart data success!",
        })
      );
    };

    pushCartToBackend()
      .catch((err) => {
        dispatch(
          uiSliceAction.showNotification({
            status: "error",
            title: "400",
            message: err.message,
          })
        );
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(uiSliceAction.showNotification(null));
        }, 2500);
      });
  };
};

export const fetchCartThunk = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reduxtest-a157c-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("Something went south.");
      }
      const data = await response.json();
      console.log(data);
      dispatch(cartSliceActions.cartInit(data));
    };
    fetchData().catch((err) => {
      dispatch(
        uiSliceAction.showNotification({
          status: "error",
          title: "400",
          message: err.message,
        })
      );
    });
  };
};
