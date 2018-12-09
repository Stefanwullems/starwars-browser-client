import { combineReducers } from "redux";
import loading from "./loading";
import error from "./error";
import content from "./content";

const reducer = combineReducers({ loading, error, content });
export default reducer;
