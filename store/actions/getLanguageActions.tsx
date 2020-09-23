import { EnumActionTypes } from "../types";
import axios from "axios";
import { Dispatch } from "redux";

export interface getLanguageActionProps {
  [x: string]: {
    lng: Object;
  };
}
export const getLanguage = () => async (dispatch: Dispatch) => {
  try {
    // POST REQUEST GETS ALL LANGUAGE OBJECT AND STORES PAYLOAD FOR REDUX
    const responseData: getLanguageActionProps = await axios.get(
      `http://localhost:5000/`
    );
    dispatch({
      type: EnumActionTypes.GET_LANGUAGE,
      payload: responseData.data.lng,
    });
  } catch (err) {
    console.log(err, "getlanguage");
  }
};

export const changeLanguage = (lng: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: EnumActionTypes.CHANGE_LANGUAGE,
      payload: lng,
    });
  } catch (err) {
    console.log(err, "changeLanguage languageActions.tsx");
  }
};
