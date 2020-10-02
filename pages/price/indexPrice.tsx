import { useState } from "react";
import classes from "./priceStyle.module.scss";
import Modal from "./Modal";
import { useSelector } from "react-redux";

export default function Price(props) {
  const language = useSelector((state) => state.language);
  let langValue = language?.lngValue;
  //---------------------------------------------- Language WORDS
  // Nav
  const price = language?.[langValue]?.price?.price;
  const pro = language?.[langValue]?.price?.pro;
  const rai = language?.[langValue]?.price?.rai;
  const kon = language?.[langValue]?.price?.kon;
  const rys = language?.[langValue]?.price?.rys;
  const jun = language?.[langValue]?.price?.jun;
  const gar = language?.[langValue]?.price?.gar;
  const val = language?.[langValue]?.price?.val;
  const kai = language?.[langValue]?.price?.kai;
  const res = language?.[langValue]?.price?.res;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <section className={classes.sectionPrice} ref={props.refProp} id="kaina">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      ></Modal>
      <div className={classes.PirmasDiv}>
        <p className={classes.kaina}>{price}</p>
        <div className={classes.div}>
          <div className={classes.projektorius}>
            <p>{pro}</p>
          </div>
          <div className={classes.rai}>
            <div className={classes.img}>
              <img src="/log.png" alt="log" />
            </div>
            <div
              className={classes.raiska}
              itemScope
              itemType="https://schema.org/ProductModel"
            >
              <p>{rai}</p>
              <p>{kon}</p>
              <p>{rys}</p>
              <p>{jun}</p>
              <p>{gar}</p>
              <p>{val}</p>
            </div>
          </div>
          <div className={classes.tableBot}>
            <p itemScope itemType="https://schema.org/price">
              {kai}
            </p>
            <button
              className={classes.rezervacija}
              onClick={() => setModalIsOpen(true)}
            >
              {res}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
