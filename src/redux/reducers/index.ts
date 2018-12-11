import { combineReducers } from "redux";
import loading from "./loading";
import content from "./content";
import contentCount from "./contentCount";

const reducer = combineReducers({ loading, content, contentCount });
export default reducer;
