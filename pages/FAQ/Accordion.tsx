import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import classes from "./accordionStyle.module.scss";

function Accordion(props) {
  const icon = classes.accordion__icon;
  const active = classes.active;
  const accordion__change = classes.accordion__change;
  const accordion = classes.accordion;

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setChange, setChangeState] = useState(icon);
  const [setIcon, setIconState] = useState(true);

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? active : "");
    setHeightState(
      setActive === active ? "0px" : `${content.current.scrollHeight}px`
    );
    setChangeState(
      setActive === active ? icon : `${icon} ${accordion__change}`
    );
    setIconState(setActive === active ? true : false);
  }
  return (
    <div className={classes.accordion__section}>
      <button className={`${accordion} ${setActive}`} onClick={toggleAccordion}>
        <p className={classes.accordion__title}>{props.title}</p>
        <Chevron
          className={setChange}
          width={15}
          fill={"#777"}
          active={setIcon}
        />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={classes.accordion__content}
      >
        <div
          className={classes.accordion__text}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <div className={classes.accordion__border}></div>
      </div>
    </div>
  );
}

export default Accordion;
