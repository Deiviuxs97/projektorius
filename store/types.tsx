import { pageObject } from "./reducers/languageReducer";

export enum EnumActionTypes {
  // LANGUAGE TYPES
  GET_LANGUAGE = "GET_LANGUAGE",
  CHANGE_LANGUAGE = "CHANGE_LANGUAGE",
}

export interface getLanguageProps {
  type: EnumActionTypes.GET_LANGUAGE;
  payload: {
    lt: pageObject;
    en: pageObject;
  };
}

export interface changeLanguageProps {
  payload: string;
  type: EnumActionTypes.CHANGE_LANGUAGE;
}

export type Action = getLanguageProps | changeLanguageProps;
