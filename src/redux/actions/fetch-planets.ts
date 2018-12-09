import * as request from "superagent";
import {
  PLANETS_FETCHED,
  PLANET_FETCHING_ERROR,
  LOADING,
  LOADING_SUCCESS,
  LOADING_ERROR
} from "../actionTypes";

function fetchPlanets(id: number) {
  return async function(dispatch) {
    dispatch({ type: LOADING });

    try {
      const res = await request.get(`https://localhost:5002/api/planets/${id}`);

      dispatch({ type: PLANETS_FETCHED, payload: res.body });
      dispatch({ type: LOADING_SUCCESS });
    } catch (error) {
      dispatch({ type: LOADING_ERROR });
    }
  };
}

export default fetchPlanets;
