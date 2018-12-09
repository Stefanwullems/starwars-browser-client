import * as request from "superagent";

interface IAction {
  type: ContentActionType | LoadingActionType;
  payload?: Planet | string;
}

function fetchModel(model: Models, id: number) {
  return async function(dispatch: (Action: IAction) => void) {
    dispatch({ type: "LOADING" });

    try {
      const res = await request.get(
        `https://localhost:5002/api/${model}/${id}`
      );

      dispatch({ type: "PLANETS_FETCHED", payload: res.body as Planet });
      dispatch({ type: "LOADING_SUCCESS" });
    } catch (error) {
      dispatch({ type: "LOADING_ERROR", payload: (error as Error).message });
    }
  };
}

export default fetchModel;
