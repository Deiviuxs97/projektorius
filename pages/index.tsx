import React, { useRef, useEffect, useState } from "react";
import Description from "./description/indexDescription";
import Price from "./price/indexPrice";
import Faq from "./FAQ/indexFaq";
import Footer from "./footer/indexFooter";
import classes from "./style.module.scss";
import Switch from "./switch/Switch";
import SendButton from "./emailSend/SendButton";

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

  //---------------------------------------------- Click part
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

  //---------------------------------------------- nodemailer

  //---------------------------------------------- Return
  return (
    <section>
      <nav className={classes.LeftSideNav}>
        <img src="/LogoMakr.png" alt="Logo" className={classes.img} />
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
          <form className={classes.inputs}>
            <div>
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
            </div>
            <input
              type="text"
              placeholder="Elektroninis paštas"
              className={classes.pildymoLaukai}
            />
            <input
              type="text"
              placeholder="Telefonas"
              className={classes.pildymoLaukai}
            />
            <input
              type="text"
              placeholder="Norima data nuomai"
              className={classes.pildymoLaukai}
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
          <SendButton></SendButton>
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
