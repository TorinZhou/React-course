import { useState, useRef } from "react";

// * Validation Funtion
const nameValidation = (name) => {
  const regEx = /^\w+$/g;
  return regEx.test(name);
};
const emailValidation = (email) => {
  const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
  return regEx.test(email);
};

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);
  const nameInputIsValid = nameValidation(enteredName);
  const emailInputIsValid = emailValidation(enteredEmail);
  let formIsValid = false;
  console.log(emailInputIsValid, enteredEmailIsTouched);
  if (nameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }
  const nameChangeHandler = (e) => {
    const value = e.target.value;
    setEnteredName(value);
  };
  const emailChangeHandler = (e) => {
    const value = e.target.value;
    setEnteredEmail(value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredNameIsTouched(true);
    setEnteredEmailIsTouched(true);
    if (!nameInputIsValid || !emailInputIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameIsTouched(false);
    setEnteredEmailIsTouched(false);
  };

  const nameInputClassName =
    !nameInputIsValid && enteredNameIsTouched
      ? "form-control invalid"
      : "form-control";
  const emailInputClassName =
    !emailInputIsValid && enteredEmailIsTouched
      ? "form-control invalid"
      : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClassName}>
        <label htmlFor="name">Your Name: </label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
        />
        {!nameInputIsValid && enteredNameIsTouched && (
          <p className="error-text">Something went wrong</p>
        )}
      </div>
      <div className={emailInputClassName}>
        <label htmlFor="email">Your Email: </label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
        {!emailInputIsValid && enteredEmailIsTouched && (
          <p className="error-text">Something went wrong</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
