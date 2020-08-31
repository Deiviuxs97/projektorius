import classes from "./priceStyle.module.scss";

export default function Price() {
  return (
    <section className={classes.sectionPrice}>
      <div className={classes.PirmasDiv}>
        <p className={classes.kaina}>Kaina</p>
        <div className={classes.div}>
          <div className={classes.projektorius}>
            <p>Projektorius</p>
          </div>
          <div className={classes.rai}>
            <div className={classes.raiska}>
              <p>
                Raiška - <br></br>Kontrastas - <br></br>Ryškumas - <br></br>
                Jungtys - <br></br>Garsiakalbis<br></br>
                Valdymo pultas
              </p>
            </div>
            <div className={classes.img}>
              <img src="/log.png" alt="log" />
            </div>
          </div>
          <div className={classes.tableBot}>
            <p>(Kaina)</p>
            <button className={classes.rezervacija}>Rezervuoti</button>
          </div>
        </div>
      </div>
    </section>
  );
}
