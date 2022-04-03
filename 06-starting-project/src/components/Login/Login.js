import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import LoginContext from "../Context/login_context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { val: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { ...state, isValid: state.val.includes("@") };
  }
  return { val: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    return { val: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { ...state, isValid: state.val.trim().length > 6 };
  }
  return { val: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const ctx = useContext(LoginContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, emailDispatch] = useReducer(emailReducer, {
    val: "",
    isValid: false,
  });
  const [passwordState, passwordDispatch] = useReducer(passwordReducer, {});

  const emailChangeHandler = (event) => {
    emailDispatch({ type: "USER_INPUT", val: event.target.value });
    // console.log("Email Changed");
  };
  const passwordChangeHandler = (event) => {
    passwordDispatch({ type: "PASSWORD_INPUT", val: event.target.value });
    // console.log(event.target.value);
    // console.log("Password Changed");
  };

  const validateEmailHandler = () => {
    emailDispatch({ type: "INPUT_BLUR" });
  };
  const validatePasswordHandler = () => {
    passwordDispatch({ type: "INPUT_BLUR" });
  };

  useEffect(() => {
    const timer = setTimeout(
      setFormIsValid(emailState.isValid && passwordState.isValid),
      500
    );
    return () => {
      // console.log("clear up function run");
      clearTimeout(timer);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.val, passwordState.val);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          className={`${classes.control} ${
            !emailState.isValid ? classes.invalid : ""
          }`}
          type="email"
          label="Email"
          value={emailState.val}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>

        <Input
          className={`${classes.control} ${
            !passwordState.isValid ? classes.invalid : ""
          }`}
          type="password"
          label="Passward"
          id="password"
          value={passwordState.val}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>

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
