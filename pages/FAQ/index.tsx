import classes from "./faqStyle.module.scss";

export default function Faq() {
  return (
    <section className={classes.sectionFaq}>
      <div className={classes.PirmasDivv}>
        <p className={classes.duk}>DUK</p>
        <div className={classes.divv}>
          <div className={classes.img}>
            <img src="/log.png" alt="log" />
          </div>
          <div className={classes.text}></div>
        </div>
      </div>
    </section>
  );
}
