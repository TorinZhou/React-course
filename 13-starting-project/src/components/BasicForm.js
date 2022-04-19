import useInput from "../hooks/use-input.js";
import { useState, useEffect } from "react";
const nameValidation = (inputName) => {
  const regEx = /^\w+$/g;
  return regEx.test(inputName);
};
const emailValidation = (inputEmail) => {
  const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regEx.test(inputEmail);
};

const BasicForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [
    firstName,
    setFirstName,
    firstNameInputIsTouched,
    setFirstNameInputIsTouched,
    firstNameInputHasError,
    firstNameOnChangeHandler,
    firstNameInit,
  ] = useInput(nameValidation);
  const [
    lastName,
    setLastName,
    lastNameInputIsTouched,
    setLastNameInputIsTouched,
    lastNameInputHasError,
    lastNameOnChangeHandler,
    lastNameInit,
  ] = useInput(nameValidation);

  const [
    email,
    setEmail,
    emailInputIsTouched,
    setEmailInputIsTouched,
    emailInputHasError,
    emailOnChangeHandler,
    emailInputInit,
  ] = useInput(emailValidation);

  useEffect(() => {
    console.log("dependency changed");
    setFormIsValid(
      firstNameInputHasError && lastNameInputHasError && emailInputHasError
    );
  }, [firstNameInputHasError, lastNameInputHasError, emailInputHasError]);

  const submitHandler = (e) => {
    setFirstNameInputIsTouched(true);
    setLastNameInputIsTouched(true);
    setEmailInputIsTouched(true);
    e.preventDefault();
    console.log("Form validation:", formIsValid);
    if (!formIsValid) {
      return;
    }
    console.log("submit");
    // firstNameInit();
    // lastNameInit();
    // emailInputInit();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={firstNameOnChangeHandler}
          />
          {firstNameInputHasError && <p>Please enter your first name.</p>}
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={lastNameOnChangeHandler}
          />
          {lastNameInputHasError && <p>Please enter your last name.</p>}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailOnChangeHandler}
        />
        {emailInputHasError && <p>Please enter an valid email.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
