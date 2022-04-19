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
  const {
    inputValue: firstName,
    inputValueIsValid: firstNameIsValid,
    setInputIsTouched: setFirstNameInputIsTouched,
    hasError: firstNameInputHasError,
    onChange: firstNameOnChangeHandler,
    init: firstNameInit,
  } = useInput(nameValidation);
  const {
    inputValue: lastName,
    inputValueIsValid: lastNameIsValid,
    setInputIsTouched: setLastNameInputIsTouched,
    hasError: lastNameInputHasError,
    onChange: lastNameOnChangeHandler,
    init: lastNameInit,
  } = useInput(nameValidation);

  const {
    inputValue: email,
    inputValueIsValid: emailIsValid,
    setInputIsTouched: setEmailInputIsTouched,
    hasError: emailInputHasError,
    onChange: emailOnChangeHandler,
    init: emailInputInit,
  } = useInput(emailValidation);

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const submitHandler = (e) => {
    setFirstNameInputIsTouched(true);
    setLastNameInputIsTouched(true);
    setEmailInputIsTouched(true);
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log("submit");
    firstNameInit();
    lastNameInit();
    emailInputInit();
  };
  const firstNameInputClass = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClass = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameInputClass}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={firstNameOnChangeHandler}
          />
          {firstNameInputHasError && <p>Please enter your first name.</p>}
        </div>
        <div className={lastNameInputClass}>
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
      <div className={emailInputClass}>
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
