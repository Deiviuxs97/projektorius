import classes from "./footerStyle.module.scss";

export default function Footer() {
  return (
    <footer className={classes.footer}>
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
          <p>+370 6666666</p>
          <p>Rezervacija paštu</p>
        </div>
        <div className={classes.apacia}>© 2020 projektorius</div>
      </div>
    </footer>
  );
}
