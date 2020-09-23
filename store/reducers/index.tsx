import { combineReducers } from "../../node_modules/redux";
import { languageReducer } from "./languageReducer";

export default combineReducers({
  language: languageReducer,
});
