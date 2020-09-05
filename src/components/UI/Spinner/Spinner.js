import React from "react";

import classes from "./Spinner.module.css";

const spinner = () => (
  <div className={classes.Loader} data-cy="loader">
    Loading...
  </div>
);

export default spinner;
