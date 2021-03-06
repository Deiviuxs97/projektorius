import React, { useEffect, useState } from "react";
import classes from "./Switch.module.scss";

const Switch = (props) => {
  return (
    <label className={classes.switch} onClick={props.onClick}>
      <input
        type="checkbox"
        checked={props.switchState}
        onChange={props.onClick}
      />
      <span
        className={classes.slider}
        itemScope
        itemType="https://schema.org/price"
      />
    </label>
  );
};

export default Switch;
