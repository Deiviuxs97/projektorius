import React from "react";
import classes from "./priceStyle.module.scss";

export default function Modal({ isOpen, onRequestClose }) {
  if (!isOpen) return null;
  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <h2>Rezervuokite</h2>
        <form className={classes.inputs}>
          <input
            type="text"
            placeholder="Vardas, Pavardė"
            className={classes.VardasPavarde}
          />
          <input
            type="text"
            placeholder="Įmonė (jeigu užsako įmonė)"
            className={classes.Imone}
          ></input>
          <input
            type="text"
            placeholder="Elektroninis paštas"
            className={classes.pildymoLaukasEl}
          />
          <input
            type="text"
            placeholder="Telefonas"
            className={classes.pildymoLaukai}
          />
          <input
            type="text"
            placeholder="Norima data nuomai"
            className={classes.pildymoLaukasData}
          />
          <select
            name="Nuomos periodas"
            className={classes.nuoma}
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" disabled>
              Nuomos periodas
            </option>
            <option value="1para">1 para</option>
            <option value="2paros">2 paros</option>
            <option value="more">Daugiau nei 2 poros</option>
          </select>
        </form>
        <button>Rezervuoti</button>
        <button onClick={onRequestClose}>Uždaryti</button>
      </div>
    </div>
  );
}
