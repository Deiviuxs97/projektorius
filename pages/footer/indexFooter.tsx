import classes from "./footerStyle.module.scss";
import { useSelector } from "react-redux";

export default function Footer() {
  const language = useSelector((state) => state.language);
  let langValue = language?.lngValue;
  //---------------------------------------------- Language WORDS
  // Nav
  const pro = language?.[langValue]?.footer?.pro;
  const proTwo = language?.[langValue]?.footer?.proTwo;
  const kon = language?.[langValue]?.footer?.kon;
  const res = language?.[langValue]?.footer?.res;

  return (
    <footer
      className={classes.footer}
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className={classes.virsus}>
        <div className={classes.kaire}>
          <p>{pro}</p>
          <hr></hr>
          <p>{proTwo}</p>
        </div>
        <div
          className={classes.desine}
          itemScope
          itemType="https://schema.org/contactType"
        >
          <p>{kon}</p>
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
                {res}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.apacia}>© 2020 projektorius</div>
    </footer>
  );
}
