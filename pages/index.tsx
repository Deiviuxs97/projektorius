import Description from "./description/indexDescription";
import Price from "./price/index";
import Faq from "./FAQ/index";
import classes from "./style.module.scss";
// import Background from "../assets/images/background.jpg";
// import backgroundDu from "../public/photo.jpg";

export default function Home() {
  return (
    <section>
      <nav className={classes.LeftSideNav}>
        <img src="/LogoMakr.png" alt="Logo" className={classes.img} />
        <div>
          <img src="/SideNavImageFull.png" alt="SideNavImages" />
          <p>Projektorius</p>
        </div>
        <div>
          <img src="/SideNavImages.png" alt="SideNavImages" />
          <p>Kainos</p>
        </div>
        <div>
          <img src="/SideNavImages.png" alt="SideNavImages" />
          <p>DUK</p>
        </div>
        <div>
          <img src="/SideNavImages.png" alt="SideNavImages" />
          <p>Rezervacija</p>
        </div>
      </nav>

      <div className={classes.Left}>
        <div>
          <p>Projektoriaus nuoma</p>
          <p>Projektorius Epson</p>
          <p>Optinis Prietaisas, Skirtas Projektuoti Atvaizdui ant</p>
          <p>Nutolusio Paviršiaus</p>
          <p>Photo</p>
          <button>Aprašymas</button>
        </div>
      </div>

      <div className={classes.Right}>
        <div className={classes.Rightdiv}>
          <p>Rezervuokite</p>
          <input
            type="text"
            value="Vardas, Pavardė"
            className={classes.VardasImone}
          />
          <input
            type="text"
            value="Įmonė (jeigu užsako įmonė)"
            className={classes.VardasImone}
          />
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
      <Description />
      <Price />
      <Faq />
    </section>
  );
}
