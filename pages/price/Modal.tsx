import React, { useState } from "react";
import classes from "./priceStyle.module.scss";
import axios from "axios";
import Errors from "../err/errors";
import { useSelector } from "react-redux";

export default function Modal({ isOpen, onRequestClose }) {
  const language = useSelector((state) => state.language);
  let langValue = language?.lngValue;
  //---------------------------------------------- Language WORDS
  // Nav
  const headingTitle = language[langValue]?.modal?.headingTitle;
  const nameAndSecondName = language?.[langValue]?.modal?.nameAndSecondName;
  const comp = language?.[langValue]?.modal?.comp;
  const el = language?.[langValue]?.modal?.el;
  const telephone = language?.[langValue]?.modal?.telephone;
  const rentTime = language?.[langValue]?.modal?.rentTime;
  const oneDay = language?.[langValue]?.modal?.oneDay;
  const twoDays = language?.[langValue]?.modal?.twoDays;
  const more = language?.[langValue]?.modal?.more;
  const res = language?.[langValue]?.modal?.res;

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
        <h2>{headingTitle}</h2>
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
            placeholder={nameAndSecondName}
            className={classes.VardasPavarde}
            onChange={handleChange}
            itemScope
            itemType="http://schema.org/givenName"
          />
          <input
            id="company"
            type="text"
            placeholder={comp}
            className={classes.Imone}
            onChange={handleChange}
            itemScope
            itemType="https://schema.org/LocalBusiness"
          />
          <input
            id="email"
            type="email"
            placeholder={el}
            className={classes.pildymoLaukasEl}
            onChange={handleChange}
            itemScope
            itemType="https://schema.org/email"
          />
          <input
            id="phone"
            type="tel"
            placeholder={telephone}
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
              {rentTime}
            </option>
            <option value="vienai parai">{oneDay}</option>
            <option value="dviejoms paroms">{twoDays}</option>
            <option value="daugiau nei dviejoms paroms">{more}</option>
          </select>
        </form>
        <Errors data={data}></Errors>
        <button
          onClick={handleSubmit}
          itemScope
          itemType="https://schema.org/ReserveAction"
        >
          {res}
        </button>
      </div>
    </div>
  );
}
