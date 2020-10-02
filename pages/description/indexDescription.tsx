import classes from "./styleDescription.module.scss";
import { useSelector } from "react-redux";

export default function Description(props) {
  const language = useSelector((state) => state.language);
  let langValue = language?.lngValue;
  //---------------------------------------------- Language WORDS
  // Nav
  const pro = language?.[langValue]?.des?.pro;
  const proDes = language?.[langValue]?.des?.proDes;
  const proDesTextOne = language?.[langValue]?.des?.proDesTextOne;
  const proDesTextTwo = language?.[langValue]?.des?.proDesTextTwo;
  const proDesTextThree = language?.[langValue]?.des?.proDesTextThree;
  const proDesTextFour = language?.[langValue]?.des?.proDesTextFour;

  return (
    <section
      className={classes.sectionDescription}
      ref={props.refProp}
      id="aprasymas"
      itemScope
      itemType="https://schema.org/description"
    >
      <div className={classes.FirstDiv}>
        <div>
          <p className={classes.bigText}>{pro}</p>
          <p className={classes.onBigText}>{proDes}</p>
        </div>
      </div>
      <div className={classes.SecondDiv}>
        <div
          className={classes.aprasymas}
          itemScope
          itemType="https://schema.org/description"
        >
          <p>
            {proDesTextOne}
            <br></br>
            <br></br> {proDesTextTwo} <br></br>
            {proDesTextThree}
            <br></br> {proDesTextFour}
          </p>
        </div>
        <div className={classes.foto}>
          <img src="/log.png" alt="log" />
        </div>
      </div>
    </section>
  );
}
