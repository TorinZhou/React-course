import { useRef, useState, useContext } from "react";
import classes from "./Checkout.module.css";
import CartContext from "../../store/cart-context";

const textValidation = (text) => {
  const regEx = /^\w+( +\w+)*$/g;
  return regEx.test(text);
};
const postalCodeValidation = (code) => {
  const regEx = /^\d{5}$/;
  return regEx.test(code);
};
const initialFormInputState = {
  enteredName: {
    value: "",
    isValid: true,
  },
  enteredStreet: {
    value: "",
    isValid: true,
  },
  enteredPostalCode: {
    value: "",
    isValid: true,
  },
  enteredCity: {
    value: "",
    isValid: true,
  },
};
const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const [formInputState, setFormInputState] = useState(initialFormInputState);
  const cartCtx = useContext(CartContext);
  const confirmHandler = (event) => {
    event.preventDefault();
    const data = {
      enteredName: {
        value: nameInputRef.current.value,
        isValid: textValidation(nameInputRef.current.value),
      },
      enteredStreet: {
        value: streetInputRef.current.value,
        isValid: textValidation(streetInputRef.current.value),
      },
      enteredPostalCode: {
        value: postalCodeInputRef.current.value,
        isValid: postalCodeValidation(postalCodeInputRef.current.value),
      },
      enteredCity: {
        value: cityInputRef.current.value,
        isValid: textValidation(cityInputRef.current.value),
      },
    };
    setFormInputState(data);
    const keys = Object.keys(data);
    const formIsValid = keys.every((key) => {
      return data[key].isValid === true;
    });
    if (!formIsValid) {
      return;
    }
    const userData = {
      name: nameInputRef.current.value,
      street: streetInputRef.current.value,
      city: cityInputRef.current.value,
      postalCode: postalCodeInputRef.current.value,
    };
    props.onOrder(userData);
    // cartCtx.closeCart();
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !formInputState.enteredName.isValid ? classes.invalid : ""
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputState.enteredName.isValid && (
          <p>Please Enter a valid name</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          !formInputState.enteredStreet.isValid ? classes.invalid : ""
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputState.enteredStreet.isValid && (
          <p>Please Enter a valid Street</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          !formInputState.enteredPostalCode.isValid ? classes.invalid : ""
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputState.enteredPostalCode.isValid && (
          <p>Please Enter a valid Postal</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          !formInputState.enteredCity.isValid ? classes.invalid : ""
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputState.enteredCity.isValid && (
          <p>Please Enter a valid city</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
