import * as request from "superagent";
import setContentCount from "./set-content-count";

interface IAction {
  type: ContentActionType | LoadingActionType | ContentCountActionType;
  payload?: Planet | string | number;
}

function fetchModel(model: Models, id: number) {
  return async function(dispatch: (Action: IAction) => void) {
    dispatch({ type: "LOADING" });

    try {
      const res = await request.get(
        `https://localhost:5002/api/${model}/${id}`
      );

      let type: ContentActionType;
      switch (model) {
        case "planets":
          type = "PLANETS_FETCHED";
          dispatch(setContentCount(61));
      }

      dispatch({ type, payload: res.body as Planet });
      dispatch({ type: "LOADING_SUCCESS" });
    } catch (error) {
      dispatch({ type: "LOADING_ERROR", payload: (error as Error).message });
    }
  };
}

export default fetchModel;
