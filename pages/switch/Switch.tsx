import React, { useEffect, useState } from "react";

import classes from "./Switch.module.scss";
const Switch = (props) => {
  return (
    <label className={classes.switch} onClick={props.onClick}>
      <input type="checkbox" />
      <span className={classes.slider} />
    </label>
  );
};

export default Switch;
