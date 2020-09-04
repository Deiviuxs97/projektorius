import { useState } from "react";
import classes from "./priceStyle.module.scss";
import Modal from "react-modal";
import { Z_FIXED } from "zlib";

const MODAL_STYLES = {
  // position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "red",
  padding: "50px",
  zIndex: 1000,
};
const OVERLAY_STYLES = {
  // position: fixed,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Price(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <section className={classes.sectionPrice} ref={props.refProp}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className={classes.Modalas}
        style={MODAL_STYLES}
      >
        <div style={OVERLAY_STYLES}>
          {/* <div style={OVERLAY_STYLE} /> */}
          <h2>Modal title</h2>
          <p>Modal Body</p>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
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
