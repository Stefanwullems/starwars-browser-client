import * as request from "superagent";
import setContentCount from "./set-content-count";

interface IAction {
  type: ContentActionType | LoadingActionType | ContentCountActionType;
  payload?: Content | number;
}

function fetchModel(model: Models, id: number) {
  return async function(dispatch: (Action: IAction) => void) {
    dispatch({ type: "LOADING" });

    try {
        const content: Content= (await request.get(
        `https://localhost:5002/api/${model}/${id}`
      )).body

      switch (model) {
        case "planets":
          dispatch(setContentCount(61));
          break;
        case "characters":
          dispatch(setContentCount(87));
          break;
        case "films":
          dispatch(setContentCount(7));
          break;
        case "vehicles":
          dispatch(setContentCount(39))
      }

      dispatch({ type: "CONTENT_FETCHED", payload: content});
      dispatch({ type: "LOADING_SUCCESS" });
    } catch (error) {
      console.error(error);
      dispatch({ type: "LOADING_ERROR" });
    }
  };
}

export default fetchModel;
