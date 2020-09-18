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

  if (!isOpen) return null;
  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <h2>Rezervuokite</h2>
        <form id="contact" action="/" method="post" className={classes.inputs}>
          <input
            id="name"
            type="text"
            placeholder="Vardas, Pavardė"
            className={classes.VardasPavarde}
            onChange={handleChange}
          />
          <input
            id="company"
            type="text"
            placeholder="Įmonė (jeigu užsako įmonė)"
            className={classes.Imone}
            onChange={handleChange}
          />
          <input
            id="email"
            type="email"
            placeholder="Elektroninis paštas"
            className={classes.pildymoLaukasEl}
            onChange={handleChange}
          />
          <input
            id="phone"
            type="tel"
            placeholder="Telefonas"
            className={classes.pildymoLaukai}
            onChange={handleChange}
          />
          <input
            id="date"
            type="text"
            placeholder="Norima data nuomai (Rugsejis 17, 2020)"
            className={classes.pildymoLaukasData}
            onChange={handleChange}
          />
          <select
            id="time"
            name="Nuomos periodas"
            className={classes.nuoma}
            defaultValue={"DEFAULT"}
            onChange={handleChange}
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
        <button onClick={handleSubmit}>Rezervuoti</button>
        <button
          onClick={() => {
            onRequestClose();
            statet();
          }}
        >
          Uždaryti
        </button>
      </div>
    </div>
  );
}
