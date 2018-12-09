import * as request from "superagent";

interface IAction {
  type: PlanetsActionType | LoadingActionType;
  payload?: Planet;
}

function fetchPlanets(id: number) {
  return async function(dispatch: (Action: IAction) => void) {
    dispatch({ type: "LOADING" });

    try {
      const res = await request.get(`https://localhost:5002/api/planets/${id}`);

      dispatch({ type: "PLANETS_FETCHED", payload: res.body as Planet });
      dispatch({ type: "LOADING_SUCCESS" });
    } catch (error) {
      console.error(error);
      dispatch({ type: "LOADING_ERROR", payload: error });
    }
  };
}

export default fetchPlanets;
