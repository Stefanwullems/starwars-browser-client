import { combineReducers } from "redux";
import loading from "./loading";
import error from "./error";
import content from "./content";
import contentCount from "./contentCount";

const reducer = combineReducers({ loading, error, content, contentCount });
export default reducer;
