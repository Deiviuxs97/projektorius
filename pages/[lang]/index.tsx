import React, { useRef, useEffect, useState } from "react";
import Description from "../description/indexDescription";
import Price from "../price/indexPrice";
import Faq from "../FAQ/indexFaq";
import Footer from "../footer/indexFooter";
import classes from "../style.module.scss";
import Switch from "../switch/Switch";
import axios from "axios";
import Errors from "../err/errors";
import Head from "next/head";
import SideDrawer from "../sideDrawer/sideDrawer";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../store/actions/getLanguageActions";
import { useRouter } from "next/router";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export default function Home() {
  const language = useSelector((state) => state.language);
  const langValue = language?.lngValue;
  const dispatch = useDispatch();
  const router = useRouter();
  const changeLanguageButton = (lng: string) => {
    dispatch(changeLanguage(lng));
    router.push(`/${lng}`);
  };
  console.log(langValue, "Kas cia?");
  const myPro = useRef(null);
  const myDes = useRef(null);
  const myPri = useRef(null);
  const myFaq = useRef(null);
  const myRefs = {
    pro: myPro,
    des: myDes,
    pri: myPri,
    faq: myFaq,
  };
  //---------------------------------------------- Language WORDS

  // Nav
  const projector = language?.[langValue]?.nav?.projector;
  const description = language?.[langValue]?.nav?.description;
  const price = language?.[langValue]?.nav?.price;
  const faq = language?.[langValue]?.nav?.faq;

  // Landing page Left
  const projectorRent = language?.[langValue]?.landingPage?.projectorRent;
  const projectorEpson = language?.[langValue]?.landingPage?.projectorEpson;
  const optical = language?.[langValue]?.landingPage?.optical;
  const desButton = language?.[langValue]?.landingPage?.desButton;

  // Landing page Right
  const reservation = language?.[langValue]?.landingPage?.headingTitle;
  const nameAndSecondName =
    language?.[langValue]?.landingPage?.nameAndSecondName;
  const comp = language?.[langValue]?.landingPage?.comp;
  const el = language?.[langValue]?.landingPage?.el;
  const telephone = language?.[langValue]?.landingPage?.telephone;
  const rentTime = language?.[langValue]?.landingPage?.rentTime;
  const oneDay = language?.[langValue]?.landingPage?.oneDay;
  const twoDays = language?.[langValue]?.landingPage?.twoDays;
  const more = language?.[langValue]?.landingPage?.more;

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

  //---------------------------------------------- Burger

  const [burgerState, setBurger] = useState(false);

  const burger = () => {
    setBurger(true);
  };

  //---------------------------------------------- Nav click part
  const executeScrollPro = () => {
    scrollToRef(myPro);
    setSwitchedFirst(true);
    setSwitchedS(false);
    setSwitchedT(false);
    setSwitchedF(false);
  };
  const executeScrollDes = () => {
    scrollToRef(myDes);
    setSwitchedFirst(false);
    setSwitchedS(true);
    setSwitchedT(false);
    setSwitchedF(false);
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
    var left = document.getElementById("kaire").clientHeight;
    var right = document.getElementById("desine").clientHeight;
    var description = document.getElementById("aprasymas").clientHeight;
    var price = document.getElementById("kaina").clientHeight;
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
      if (left + right >= window.scrollY) {
        setSwitchedFirst(true);
        setSwitchedS(false);
        setSwitchedT(false);
        setSwitchedF(false);
      }
      if (
        left + right <= window.scrollY &&
        left + right + description >= window.scrollY
      ) {
        setSwitchedFirst(false);
        setSwitchedS(true);
        setSwitchedT(false);
        setSwitchedF(false);
      }
      if (
        left + right + description <= window.scrollY &&
        left + right + description + price >= window.scrollY
      ) {
        // console.log("trecias");
        setSwitchedFirst(false);
        setSwitchedS(false);
        setSwitchedT(true);
        setSwitchedF(false);
      }
      if (left + right + description + price <= window.scrollY) {
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
      <SideDrawer
        isOpen={burgerState}
        onRequestClose={() => setBurger(false)}
        myRefs={myRefs}
      />
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
        <button onClick={() => changeLanguageButton("lt")}>LT</button>
        <button onClick={() => changeLanguageButton("en")}>EN</button>
        <div>
          <Switch onClick={executeScrollPro} switchState={switchedFirst} />
          <p onClick={executeScrollPro}>{projector}</p>
        </div>
        <div>
          <Switch onClick={executeScrollDes} switchState={switchedS} />
          <p onClick={executeScrollDes}>{description}</p>
        </div>
        <div>
          <Switch onClick={executeScrollPri} switchState={switchedT} />
          <p onClick={executeScrollPri}>{price}</p>
        </div>
        <div>
          <Switch onClick={executeScrollFaq} switchState={switchedF} />
          <p onClick={executeScrollFaq}>{faq}</p>
        </div>
        <div className={classes.DrawerToggle} onClick={burger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      <div
        id="kaire"
        ref={myPro}
        className={classes.Left}
        style={{
          backgroundImage: "url(" + "/bg.jpg" + ")",
        }}
      >
        <div>
          <p>{projectorRent}</p>
          <p>{projectorEpson}</p>
          <p>{optical}</p>
          <button onClick={executeScrollDes}>{desButton}</button>
        </div>
      </div>

      <div className={classes.Right} id="desine">
        <div className={classes.Rightdiv}>
          <p className={classes.Rezervuokite}>{reservation}</p>
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
                placeholder={nameAndSecondName}
                // value={name}
                className={classes.VardasPavarde}
                required
                onChange={handleChange}
                itemScope
                itemType="http://schema.org/givenName"
              />

              <input
                id="company"
                type="text"
                placeholder={comp}
                // value={company}
                className={classes.Imone}
                onChange={handleChange}
                itemScope
                itemType="https://schema.org/LocalBusiness"
              />
            </div>

            <input
              id="email"
              type="email"
              placeholder={el}
              // value={email}
              className={classes.pildymoLaukai}
              required
              onChange={handleChange}
              itemScope
              itemType="https://schema.org/email"
            />

            <input
              id="phone"
              type="tel"
              placeholder={telephone}
              // value={phone}
              className={classes.pildymoLaukai}
              required
              onChange={handleChange}
              itemScope
              itemType="https://schema.org/telephone"
            />

            <input
              id="date"
              type="date"
              // placeholder="Norima data nuomai (Rugsejis 17, 2020)"
              // value={date}
              className={classes.pildymoLaukai}
              required
              onChange={handleChange}
              min="2020-09-01"
              max="2021-12-31"
              itemScope
              itemType="https://schema.org/Date"
            />

            <select
              id="time"
              // name="Nuomos periodas"
              className={classes.nuoma}
              defaultValue={"DEFAULT"}
              required
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
            <Errors data={data}></Errors>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
              className={classes.RezervuotiButton}
              onClick={handleSubmit}
              itemScope
              itemType="https://schema.org/RentAction"
            >
              Rezervuoti
            </button>
          </form>
          <div className={classes.kontaktai}>
            <p className={classes.musuKontaktai}>Mūsų kontaktai:</p>
            <div itemScope itemType="https://schema.org/address">
              <img src="/location.png" alt="location" />
              <div>
                <p>Adresas:</p>
                <p>gatve gatve gatve</p>
              </div>
            </div>
            <div itemScope itemType="https://schema.org/email">
              <img src="/letter.png" alt="email" />
              <div>
                <p>El. paštas:</p>
                <p>test@test.com</p>
              </div>
            </div>
            <div itemScope itemType="https://schema.org/email">
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
