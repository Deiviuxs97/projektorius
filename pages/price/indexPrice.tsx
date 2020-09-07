import { useState } from "react";
import classes from "./priceStyle.module.scss";
import Modal from "./Modal";
import { Z_FIXED } from "zlib";

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
            <div className={classes.raiska}>
              <p>
                Raiška - <br></br>Kontrastas - <br></br>Ryškumas - <br></br>
                Jungtys - <br></br>Garsiakalbis<br></br>
                Valdymo pultas
              </p>
            </div>
            <div className={classes.img}>
              <img src="/log.png" alt="log" />
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
