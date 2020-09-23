import classes from "./footerStyle.module.scss";

export default function Footer() {
  return (
    <footer
      className={classes.footer}
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className={classes.virsus}>
        <div className={classes.kaire}>
          <p>Projektoriaus nuoma</p>
          <hr></hr>
          <p>
            Projektoriaus nuoma Projektoriaus nuoma Projektoriaus nuoma
            Projektoriaus nuoma
          </p>
        </div>
        <div className={classes.desine}>
          <p>Kontaktai</p>
          <hr></hr>
          <ul>
            <li>
              <a
                href="tel:+370 6666666"
                itemScope
                itemType="https://schema.org/telephone"
              >
                +370 666 6666
              </a>
            </li>
            <li>
              <a
                href="mailto:test@test.com"
                itemScope
                itemType="https://schema.org/email"
              >
                Rezervacija paštu
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.apacia}>© 2020 projektorius</div>
    </footer>
  );
}
