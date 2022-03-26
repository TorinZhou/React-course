import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const reducer = (state, action) => {
  if (action.type === "input") {
    return { ...state, val: state.val + action.val };
  }
  return { val: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, emailStateDepatch] = useReducer(reducer, {
    val: "",
    isValid: false,
  });

  const emailChangeHandler = (event) => {
    emailStateDepatch({ type: "input", payload: event.target.value });
    console.log("Email Changed");
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    console.log("Password Changed");
  };

  const validateEmailHandler = () => {
    emailStateDepatch();
  };

  useEffect(() => {
    const timer = setTimeout(
      setFormIsValid(emailState.isValid && enteredPassword.trim().length > 6),
      500
    );
    return () => {
      console.log("clear up function run");
      clearTimeout(timer);
    };
  }, [emailState.val, enteredPassword]);

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.val, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            !emailState.isValid ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.val}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
