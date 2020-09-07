import classes from "./faqStyle.module.scss";
import React, { constructor } from "react";
import Collapsible from "react-collapsible";
import Accordion from "./Accordion";

export default function Faq(props) {
  return (
    <section className={classes.sectionFaq} ref={props.refProp}>
      <div className={classes.PirmasDivv}>
        <p className={classes.duk}>DUK</p>
        <div className={classes.divv}>
          <div className={classes.img}>
            <img src="/log.png" alt="log" />
          </div>
          <div className={classes.text}>
            <Accordion
              title="Kokie projektoriaus parametrai?"
              content="<p className={classes.CollapsibleText}>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>"
            />
            <Accordion
              title="Kokie yra ekrano parametrai?"
              content="<p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>"
            />
            <Accordion
              title="Kazkas dar"
              content="<p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>"
            />
            {/* <Collapsible
              className={classes.Collapsible}
              trigger="Kokie projektoriaus parametrai?"
            >
              <p className={classes.CollapsibleText}>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
            </Collapsible>
            <Collapsible
              className={classes.Collapsible}
              trigger="Kokie yra ekrano parametrai?"
            >
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
            </Collapsible>
            <Collapsible className={classes.Collapsible} trigger="Kazkas dar">
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
            </Collapsible> */}
          </div>
        </div>
      </div>
    </section>
  );
}
