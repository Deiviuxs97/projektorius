import React, { useRef, useEffect, useState } from "react";
import Description from "./description/indexDescription";
import Price from "./price/indexPrice";
import Faq from "./FAQ/indexFaq";
import Footer from "./footer/indexFooter";
import classes from "./style.module.scss";
import Switch from "./switch/Switch";
import axios from "axios";
import Errors from "./err/errors";
import Head from "next/head";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export default function Home() {
  const myPro = useRef(null);
  const myDes = useRef(null);
  const myPri = useRef(null);
  const myFaq = useRef(null);

  //---------------------------------------------- States
  const [switchedFirst, setSwitchedFirst] = useState(true);
  const [switchedS, setSwitchedS] = useState(false);
  const [switchedT, setSwitchedT] = useState(false);
  const [switchedF, setSwitchedF] = useState(false);

  // Form States
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Errors States
  const [data, setData] = useState(null);

  //---------------------------------------------- Nav click part
  const executeScrollPro = () => {
    scrollToRef(myPro);
    setSwitchedFirst(true);
    setSwitchedS(false);
    setSwitchedT(false);
    setSwitchedF(false);
    // console.log("Click one");
  };
  const executeScrollDes = () => {
    scrollToRef(myDes);
    setSwitchedFirst(false);
    setSwitchedS(true);
    setSwitchedT(false);
    setSwitchedF(false);
    // console.log("Click two");
  };
  const executeScrollPri = () => {
    scrollToRef(myPri);
    setSwitchedFirst(false);
    setSwitchedS(false);
    setSwitchedT(true);
    setSwitchedF(false);
  };
  const executeScrollFaq = () => {
    scrollToRef(myFaq);
    setSwitchedFirst(false);
    setSwitchedS(false);
    setSwitchedT(false);
    setSwitchedF(true);
  };

  //---------------------------------------------- Scroll part
  const handleScroll = () => {
    if (window.innerWidth > 1100) {
      // console.log(window.innerWidth, ">1100");
      if (window.innerHeight >= window.scrollY) {
        // console.log("pirmas");
        setSwitchedFirst(true);
        setSwitchedS(false);
        setSwitchedT(false);
        setSwitchedF(false);
      }
      if (
        window.innerHeight <= window.scrollY &&
        window.innerHeight * 2 >= window.scrollY
      ) {
        // console.log("antras");
        setSwitchedFirst(false);
        setSwitchedS(true);
        setSwitchedT(false);
        setSwitchedF(false);
      }
      if (
        window.innerHeight * 2 <= window.scrollY &&
        window.innerHeight * 3 >= window.scrollY
      ) {
        // console.log("trecias");
        setSwitchedFirst(false);
        setSwitchedS(false);
        setSwitchedT(true);
        setSwitchedF(false);
      }
      if (window.innerHeight * 3 <= window.scrollY) {
        // console.log("ketvirtas");
        setSwitchedFirst(false);
        setSwitchedS(false);
        setSwitchedT(false);
        setSwitchedF(true);
      }
    } else {
      // console.log(window.innerWidth, "<1100");
      if (window.innerHeight >= window.scrollY) {
        // console.log("pirmas");
        setSwitchedFirst(true);
        setSwitchedS(false);
        setSwitchedT(false);
        setSwitchedF(false);
      }
      if (
        window.innerHeight <= window.scrollY &&
        window.innerHeight * 3 >= window.scrollY
      ) {
        // console.log("antras");
        setSwitchedFirst(false);
        setSwitchedS(true);
        setSwitchedT(false);
        setSwitchedF(false);
      }
      if (
        window.innerHeight * 3 <= window.scrollY &&
        window.innerHeight * 4 >= window.scrollY
      ) {
        // console.log("trecias");
        setSwitchedFirst(false);
        setSwitchedS(false);
        setSwitchedT(true);
        setSwitchedF(false);
      }
      if (window.innerHeight * 4 <= window.scrollY) {
        // console.log("ketvirtas");
        setSwitchedFirst(false);
        setSwitchedS(false);
        setSwitchedT(false);
        setSwitchedF(true);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

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

  //---------------------------------------------- Return
  return (
    <section>
      <Head>
        <title>Projektorius Epson</title>
        {/* <meta
          property="og:title"
          content="Oficialus Džong Juan Čigongas tinklapis Lietuvoje"
        />
        <meta
          property="og:image"
          content="http://www.zyq108.lt/images/Logo.png"
        />
        <meta property="og:site_name" content="ZYQ108" />
        <meta property="og:url" content="http://www.zyq108.lt/" />
        <meta
          property="og:description"
          content="Tinklapis skirtas Džong Juan Čigongo mokyklos renginių bei informacijos viešinimui."
        /> */}
      </Head>
      <nav
        itemScope
        itemType="https://schema.org/SiteNavigationElement
        "
        className={classes.LeftSideNav}
      >
        <img
          itemScope
          itemType="https://schema.org/image"
          src="/LogoMakr.png"
          alt="Logo"
          className={classes.img}
        />
        <div>
          <Switch onClick={executeScrollPro} switchState={switchedFirst} />
          <p onClick={executeScrollPro}>Projektorius</p>
        </div>
        <div>
          <Switch onClick={executeScrollDes} switchState={switchedS} />
          <p onClick={executeScrollDes}>Aprašymas</p>
        </div>
        <div>
          <Switch onClick={executeScrollPri} switchState={switchedT} />
          <p onClick={executeScrollPri}>Kaina</p>
        </div>
        <div>
          <Switch onClick={executeScrollFaq} switchState={switchedF} />
          <p onClick={executeScrollFaq}>DUK</p>
        </div>
        <div className={classes.DrawerToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      <div
        ref={myPro}
        className={classes.Left}
        style={{
          backgroundImage: "url(" + "/bg.jpg" + ")",
        }}
      >
        <div>
          <p>Projektoriaus nuoma</p>
          <p>Projektorius Epson</p>
          <p>
            Optinis Prietaisas, Skirtas Projektuoti Atvaizdui ant Nutolusio
            Paviršiaus
          </p>
          <button onClick={executeScrollDes}>Aprašymas</button>
        </div>
      </div>

      <div className={classes.Right}>
        <div className={classes.Rightdiv}>
          <p className={classes.Rezervuokite}>Rezervuokite</p>
          <form
            id="contact"
            action="/"
            method="post"
            className={classes.inputs}
            itemScope
            itemType="https://schema.org/Reservation"
          >
            <div>
              <input
                id="name"
                type="text"
                placeholder="Vardas, Pavardė"
                // value={name}
                className={classes.VardasPavarde}
                required
                onChange={handleChange}
              />

              <input
                id="company"
                type="text"
                placeholder="Įmonė (jeigu užsako įmonė)"
                // value={company}
                className={classes.Imone}
                onChange={handleChange}
              />
            </div>

            <input
              id="email"
              type="email"
              placeholder="Elektroninis paštas"
              // value={email}
              className={classes.pildymoLaukai}
              required
              onChange={handleChange}
            />

            <input
              id="phone"
              type="tel"
              placeholder="Telefonas"
              // value={phone}
              className={classes.pildymoLaukai}
              required
              onChange={handleChange}
            />

            <input
              id="date"
              type="text"
              placeholder="Norima data nuomai (Rugsejis 17, 2020)"
              // value={date}
              className={classes.pildymoLaukai}
              required
              onChange={handleChange}
            />

            <select
              id="time"
              // name="Nuomos periodas"
              className={classes.nuoma}
              defaultValue={"DEFAULT"}
              required
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
            <Errors data={data}></Errors>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
              className={classes.RezervuotiButton}
              onClick={handleSubmit}
            >
              Rezervuoti
            </button>
          </form>
          <div className={classes.kontaktai}>
            <p className={classes.musuKontaktai}>Mūsų kontaktai:</p>
            <div>
              <img src="/location.png" alt="location" />
              <div>
                <p>Adresas:</p>
                <p>gatve gatve gatve</p>
              </div>
            </div>
            <div>
              <img src="/letter.png" alt="email" />
              <div>
                <p>El. paštas:</p>
                <p>test@test.com</p>
              </div>
            </div>
            <div>
              <img src="/phone.png" alt="phone" />
              <div>
                <p>Telefonas:</p>
                <p>+370 600 00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Description refProp={myDes}></Description>
      <Price refProp={myPri}></Price>
      <Faq refProp={myFaq}></Faq>
      <Footer></Footer>
    </section>
  );
}
