import React from "react";

import classes from "./Button.module.css";

const Button: React.FC = (props) => {
  return (
    <button {...props} className={classes.btn}>
      {props.children}
    </button>
  );
};

export default Button;
