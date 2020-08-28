import classes from "./styleDescription.module.scss";

export default function Description() {
  return (
    <section className={classes.sectionDescription}>
      <div className={classes.FirstDiv}>
        <div>
          <p className={classes.bigText}>APIE PROJEKTORIŲ</p>
          <p className={classes.onBigText}>Projektoriaus aprašymas</p>
        </div>
      </div>
      <div className={classes.SecondDiv}>
        <div className={classes.aprasymas}>
          <p>
            Projektorius Jums padės dideliame ekrane pateikti jūsų prezentaciją,
            parodyti filmuotą medžiagą, nuotraukas ar pažiūrėti mėgstamą filmą.
            Dažnai po įvykusios šventės (jubiliejaus, vestuvių, krikštynų)
            svečiai nekantrauja pamatyti nuotraukas ir video įrašą. Bet norisi
            dar šventės metu peržiūrėti nuotraukas ar filmuotą medžiagą. Siūlome
            išsinomuoti kokybišką projektorių, pačiomis geriausiomis sąlygomis
            bei kainomis.<br></br>
            <br></br> Projektoriaus galimybės: parodyti savo klientams,
            partneriams, draugams, svečiams, kolegoms – prezentaciją,
            nuotraukas, filmuotą medžiagą. <br></br>Projektorius gali būti
            naudojamas: įmonėje, įmonės šventėje, pristatant produktą,
            gimtadienyje , vestuvėse, jubiliejuose, krikštynose.<br></br> Už
            papildomą mokestį galime pasiūlyti šiuos priedus: kompiuteris,
            prezentacijų pultelis, papildomus laidus, garso apratūrą,
            mikrofonus, aptarnaujantį personalą.
          </p>
        </div>
        <div className={classes.foto}>
          <img src="/log.png" alt="log" />
        </div>
      </div>
    </section>
  );
}
