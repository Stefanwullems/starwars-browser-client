import { combineReducers } from "redux";
import loading from "./loading";
import content from "./content";
import contentCount from "./contentCount";
import namesAndIds from "./namesAndIds";

interface IRootReducer {
  loading: boolean;
  content: Content;
  contentCount: number;
  namesAndIds: NameAndId[];
}

const rootReducer = combineReducers<IRootReducer>({
  loading,
  content,
  contentCount,
  namesAndIds
});
export default rootReducer;
