import * as request from "superagent";

export const PLANETS_FETCHED = "PLANETS_FETCHED";
export const PLANET_FETCHING_ERROR = "PLANET_FETCHING_ERROR";

const baseUrl = "https://localhost:5002/api/";

function fetchPlanets(id: number) {
  return async function(dispatch) {
    try {
      const res = await request.get(baseUrl + `planets/${id}`);
      dispatch({ type: PLANETS_FETCHED, payload: res.body });
    } catch (error) {
      console.error(error);
    }
  };
}

export default fetchPlanets;
