import React from "react";

import classes from "./Button.module.css";

const button = (props) => {
  const { disabled, btnType, clicked, children, ...rest } = props;
  return (
    <button
      disabled={disabled}
      className={[classes.Button, classes[btnType] || " "].join(" ")}
      onClick={clicked}
      {...rest}
    >
      {children}
    </button>
  );
};

export default button;
