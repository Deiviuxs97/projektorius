import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { changeLanguage } from "../../store/actions/getLanguageActions";
import { useDispatch } from "react-redux";
import classes from "./LangButtons.module.scss";

interface LangButtonProps {
  lang: string;
}

const buttons = (props: LangButtonProps) => {
  console.log(props.lang, "Lang2");
  useEffect(() => {
    if (props.lang === "en") {
      dispatch(changeLanguage("en"));
    } else {
      dispatch(changeLanguage("lt"));
    }
  }, []);
  const dispatch = useDispatch();
  const router = useRouter();
  const changeLanguageButton = (lng: string) => {
    dispatch(changeLanguage(lng));
    router.push(`/${lng}`);
  };

  return (
    <React.Fragment>
      <button
        className={classes.buttonLT}
        onClick={() => changeLanguageButton("lt")}
        itemScope
        itemType="https://schema.org/Language"
      >
        LT
      </button>
      <button
        className={classes.buttonEN}
        onClick={() => changeLanguageButton("en")}
        itemScope
        itemType="https://schema.org/Language"
      >
        EN
      </button>
    </React.Fragment>
  );
};

export default buttons;
