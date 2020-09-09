import React from "react";

import classes from "./Switch.module.scss";
const Switch = (props) => {
  // var active =
  //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //     console.log(document.body.scrollTop);
  //     console.log(document.documentElement.scrollTop);
  //   }
  //   console.log(document.body.scrollTop);
  //   console.log(document.documentElement.scrollTop);

  return (
    <label className={classes.switch} onClick={props.onClick}>
      <input type="checkbox" />
      <span className={classes.slider} />
    </label>
  );
};

export default Switch;
