import React, { useState } from "react";
import classes from "./priceStyle.module.scss";
import axios from "axios";
import Errors from "../err/errors";

export default function Modal({ isOpen, onRequestClose }) {
  // Form States
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Errors States
  const [data, setData] = useState(null);

  const statet = () => {
    setData(null);
  };

  //---------------------------------------------- Form handle

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "company") {
      setCompany(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "phone") {
      setPhone(e.target.value);
    } else if (e.target.id === "date") {
      setDate(e.target.value);
    } else if (e.target.id === "time") {
      setTime(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      date !== "" &&
      time !== ""
    ) {
      const dataToSubmit = {
        name,
        company,
        email,
        phone,
        date,
        time,
      };
      axios.post("http://localhost:5000/send/sendemail", dataToSubmit);
    } else {
      let dataToSubmit = {
        name,
        company,
        email,
        phone,
        date,
        time,
      };
      setData(dataToSubmit);
    }
  };

  const _onHeaderClick = (event) => {
    event.stopPropagation();
  };

  if (!isOpen) return null;
  return (
    <div
      className={classes.overlay}
      onClick={() => {
        onRequestClose();
        statet();
      }}
    >
      <div className={classes.modal} onClick={_onHeaderClick}>
        <div
          className={classes.close}
          onClick={() => {
            onRequestClose();
            statet();
          }}
        >
          X
        </div>
        <h2>Rezervacija</h2>
        <form
          id="contact"
          action="/"
          method="post"
          className={classes.inputs}
          itemScope
          itemType="https://schema.org/Reservation"
        >
          <input
            id="name"
            type="text"
            placeholder="Vardas, Pavardė"
            className={classes.VardasPavarde}
            onChange={handleChange}
            itemScope
            itemType="http://schema.org/givenName"
          />
          <input
            id="company"
            type="text"
            placeholder="Įmonė (jeigu užsako įmonė)"
            className={classes.Imone}
            onChange={handleChange}
            itemScope
            itemType="https://schema.org/LocalBusiness"
          />
          <input
            id="email"
            type="email"
            placeholder="Elektroninis paštas"
            className={classes.pildymoLaukasEl}
            onChange={handleChange}
            itemScope
            itemType="https://schema.org/email"
          />
          <input
            id="phone"
            type="tel"
            placeholder="Telefonas"
            className={classes.pildymoLaukai}
            onChange={handleChange}
            itemScope
            itemType="https://schema.org/telephone"
          />
          <input
            id="date"
            type="date"
            className={classes.pildymoLaukasData}
            onChange={handleChange}
            min="2020-09-01"
            max="2021-12-31"
            itemScope
            itemType="https://schema.org/Date"
          />
          <select
            id="time"
            name="Nuomos periodas"
            className={classes.nuoma}
            defaultValue={"DEFAULT"}
            onChange={handleChange}
            itemScope
            itemType="https://schema.org/Reservation"
          >
            <option value="DEFAULT" disabled>
              Nuomos periodas
            </option>
            <option value="vienai parai">1 para</option>
            <option value="dviejoms paroms">2 paros</option>
            <option value="daugiau nei dviejoms paroms">
              Daugiau nei 2 paros
            </option>
          </select>
        </form>
        <Errors data={data}></Errors>
        <button
          onClick={handleSubmit}
          itemScope
          itemType="https://schema.org/ReserveAction"
        >
          Rezervuoti
        </button>
      </div>
    </div>
  );
}
