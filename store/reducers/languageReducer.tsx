import {
  Action,
  getLanguageProps,
  changeLanguageProps,
  EnumActionTypes,
} from "../types";

interface pageFieldsObject {
  [x: string]: string | Array<string>;
}
export interface pageObject {
  [x: string]: string | pageFieldsObject;
}

export interface languageReducerState {
  [x: string]: string | any;
}

//INIT STATE
const initialState = {
  lngValue: "lt",
};

export const getLanguageReducer = (
  state: languageReducerState,
  action: getLanguageProps
) => {
  return {
    ...state,
    lt: action.payload.lt as pageObject,
    en: action.payload.en as pageObject,
  };
};

const changeLanguageReducer = (
  state: languageReducerState,
  action: changeLanguageProps
) => {
  return {
    ...state,
    lngValue: action.payload as string,
  };
};

export const languageReducer = (
  state: languageReducerState = initialState,
  action: Action
) => {
  switch (action.type) {
    case EnumActionTypes.GET_LANGUAGE:
      return getLanguageReducer(state, action);
    case EnumActionTypes.CHANGE_LANGUAGE:
      return changeLanguageReducer(state, action);
    default:
      return state;
  }
};
