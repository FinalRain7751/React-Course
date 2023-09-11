import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT")
    return { value: action.value, isValid: action.value.trim().includes("@") };

  if (action.type === "INPUT_BLUR") return state;
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT")
    return { value: action.value, isValid: action.value.length > 6 };

  if (action.type === "INPUT_BLUR") return state;
};

const Login = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  // const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     setFormIsValid(emailState.isValid && passwordState.isValid);
  //   }, 500);

  //   return () => clearTimeout(identifier);
  // }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    const newEmail = event.target.value;
    dispatchEmail({ type: "USER_INPUT", value: newEmail });
  };

  const passwordChangeHandler = (event) => {
    const newPassword = event.target.value;
    dispatchPassword({ type: "USER_INPUT", value: newPassword });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            !emailState.value || emailState.isValid ? "" : classes.invalid
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            !passwordState.value || passwordState.isValid ? "" : classes.invalid
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!(emailState.isValid && passwordState.isValid)}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
