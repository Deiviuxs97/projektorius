import React, { useRef } from "react";
import Description from "./description/indexDescription";
import Price from "./price/indexPrice";
import Faq from "./FAQ/indexFaq";
import Footer from "./footer/indexFooter";
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
        <div>
          {/* <img
            src="/SideNavImageFull.png"
            alt="SideNavImages"
            onClick={executeScrollPro}
          /> */}
          <p onClick={executeScrollPro}>Projektorius</p>
        </div>
        <div>
          <img
            src="/SideNavImages.png"
            alt="SideNavImages"
            onClick={executeScrollDes}
          />
          <p onClick={executeScrollDes}>Aprašymas</p>
        </div>
        <div>
          <img
            src="/SideNavImages.png"
            alt="SideNavImages"
            onClick={executeScrollPri}
          />
          <p onClick={executeScrollPri}>Kaina</p>
        </div>
        <div>
          <img
            src="/SideNavImages.png"
            alt="SideNavImages"
            onClick={executeScrollFaq}
          />
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
          <button className={classes.RezervuotiButton}>Rezervuoti</button>
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
