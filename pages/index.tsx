import React, { useRef } from "react";
import Description from "./description/indexDescription";
import Price from "./price/indexPrice";
import Faq from "./FAQ/indexFaq";
import classes from "./style.module.scss";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export default function Home() {
  const myPro = useRef(null);
  const myDes = useRef(null);
  const myPri = useRef(null);
  const myFaq = useRef(null);
  const executeScrollPro = () => scrollToRef(myPro);
  const executeScrollDes = () => scrollToRef(myDes);
  const executeScrollPri = () => scrollToRef(myPri);
  const executeScrollFaq = () => scrollToRef(myFaq);
  return (
    <section>
      <nav className={classes.LeftSideNav}>
        <img src="/LogoMakr.png" alt="Logo" className={classes.img} />
        <div onClick={executeScrollPro}>
          <img src="/SideNavImageFull.png" alt="SideNavImages" />
          <p>Projektorius</p>
        </div>
        <div onClick={executeScrollDes}>
          <img src="/SideNavImages.png" alt="SideNavImages" />
          <p>Aprašymas</p>
        </div>
        <div onClick={executeScrollPri}>
          <img src="/SideNavImages.png" alt="SideNavImages" />
          <p>Kaina</p>
        </div>
        <div onClick={executeScrollFaq}>
          <img src="/SideNavImages.png" alt="SideNavImages" />
          <p>DUK</p>
        </div>
      </nav>

      <div
        ref={myPro}
        className={classes.Left}
        style={{
          backgroundImage: "url(" + "/bg.jpg" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <p>Projektoriaus nuoma</p>
          <p>Projektorius Epson</p>
          <p>Optinis Prietaisas, Skirtas Projektuoti Atvaizdui ant</p>
          <p>Nutolusio Paviršiaus</p>
          <button onClick={executeScrollDes}>Aprašymas</button>
        </div>
      </div>

      <div className={classes.Right}>
        <div className={classes.Rightdiv}>
          <p>Rezervuokite</p>
          <input
            type="text"
            // value="Vardas, Pavardė"
            className={classes.VardasImone}
          />
          <input
            type="text"
            value="Įmonė (jeigu užsako įmonė)"
            className={classes.VardasImone}
          ></input>
          <input
            type="text"
            value="Elektroninis paštas"
            className={classes.pildymoLaukai}
          />
          <input
            type="text"
            value="Telefonas"
            className={classes.pildymoLaukai}
          />
          <input
            type="text"
            value="Norima data nuomai"
            className={classes.pildymoLaukai}
          />
          <select name="Nuomos periodas" className={classes.nuoma}>
            <option value="">Nuomos periodas</option>
            <option value="1para">1 para</option>
            <option value="2paros">2 paros</option>
            <option value="more">Daugiau nei 2 poros</option>
          </select>
          <button className={classes.rezervacija}>Rezervuoti</button>
          <p>Mūsų kontaktai:</p>
          <div>
            <img src="/PlaceLogo.png" alt="place" />
            <div>
              <p>Adresas:</p>
              <p>gatve gatve gatve</p>
            </div>
          </div>
          <div>
            <img src="/ElLogo.png" alt="el" />
            <div>
              <p>El. paštas:</p>
              <p>test@test.com</p>
            </div>
          </div>
          <div>
            <img src="/TelLogo.png" alt="tel" />
            <div>
              <p>Telefonas:</p>
              <p>+370 600 00</p>
            </div>
          </div>
        </div>
      </div>
      <Description refProp={myDes}></Description>
      <Price refProp={myPri}></Price>
      <Faq refProp={myFaq}></Faq>
    </section>
  );
}
