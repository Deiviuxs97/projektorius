import React, { useEffect, useState } from "react";

import classes from "./Switch.module.scss";
const Switch = (props) => {
  // console.log(props.switch);
  // console.log(props.number);
  // console.log(props.swi);
  // if (props.swi == true) {
  //   console.log("swi true");
  // console.log("work");
  console.log(props.switchState);
  return (
    <label className={classes.switch} onClick={props.onClick}>
      <input
        type="checkbox"
        checked={props.switchState}
        onChange={props.onClick}
      />
      <span className={classes.slider} />
    </label>
  );
  // } else {
  //   console.log("swi false");
  //   return (
  //     <label className={classes.switch} onClick={props.onClick}>
  //       <input type="checkbox" />
  //       <span className={classes.slider} />
  //     </label>
  //   );
  // }
};

export default Switch;
