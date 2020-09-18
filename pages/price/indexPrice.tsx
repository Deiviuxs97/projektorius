import { useState } from "react";
import classes from "./priceStyle.module.scss";
import Modal from "./Modal";

export default function Price(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <section className={classes.sectionPrice} ref={props.refProp}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      ></Modal>
      <div className={classes.PirmasDiv}>
        <p className={classes.kaina}>Kaina</p>
        <div className={classes.div}>
          <div className={classes.projektorius}>
            <p>Projektorius</p>
          </div>
          <div className={classes.rai}>
            <div className={classes.img}>
              <img src="/log.png" alt="log" />
            </div>
            <div className={classes.raiska}>
              <p>Raiška -</p>
              <p>Kontrastas -</p>
              <p>Ryškumas -</p>
              <p>Jungtys -</p>
              <p>Garsiakalbis</p>
              <p>Valdymo pultas</p>
            </div>
          </div>
          <div className={classes.tableBot}>
            <p>(Kaina)</p>
            <button
              className={classes.rezervacija}
              onClick={() => setModalIsOpen(true)}
            >
              Rezervuoti
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
