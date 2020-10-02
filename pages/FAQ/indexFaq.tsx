import classes from "./faqStyle.module.scss";
import React from "react";
import Accordion from "./Accordion";
import { useSelector } from "react-redux";

export default function Faq(props) {
  const language = useSelector((state) => state.language);
  let langValue = language?.lngValue;
  //---------------------------------------------- Language WORDS
  // Nav
  const faqOne = language?.[langValue]?.faq?.faqOne;
  const faqTwo = language?.[langValue]?.faq?.faqTwo;
  const faqThree = language?.[langValue]?.faq?.faqThree;
  const faqOneText = language?.[langValue]?.faq?.faqOneText;
  const faqTwoText = language?.[langValue]?.faq?.faqTwoText;
  const faqThreeText = language?.[langValue]?.faq?.faqThreeText;
  const faqTitle = language?.[langValue]?.faq?.faqTitle;

  return (
    <section
      className={classes.sectionFaq}
      ref={props.refProp}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className={classes.PirmasDivv}>
        <p className={classes.duk}>{faqTitle}</p>
        <div className={classes.divv}>
          <div className={classes.img}>
            <img src="/log.png" alt="log" />
          </div>
          <div className={classes.text}>
            <Accordion
              title={faqOne}
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
              title={faqTwo}
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
              title={faqThree}
              content="<p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
