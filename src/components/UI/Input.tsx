import { forwardRef } from "react";
import React from "react";

import classes from "./Input.module.css";

const Input: React.FC = forwardRef((props, ref) => {
  return (
    <input {...props} ref={ref} className={classes.input}>
      {props.children}
    </input>
  );
});

export const InputTextarea: React.FC = forwardRef((props, ref) => {
  return (
    <textarea {...props} ref={ref} className={classes.input}>
      {props.children}
    </textarea>
  );
});

export default Input;
