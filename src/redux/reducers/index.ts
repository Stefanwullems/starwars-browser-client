import { combineReducers } from "redux";
import loading from "./loading";
import error from "./error";

const reducer = combineReducers({ loading, error });
export default reducer;
