import * as request from "superagent";

interface IAction {
  type: NamesAndIdsActionType;
  payload?: NameAndId[];
}

function fetchNameAndIds(model: Models) {
  return async function(dispatch: (Action: IAction) => void) {
    try {
      const res = await request.get(`https://localhost:5002/api/${model}`);
      dispatch({
        type: "NAMES_AND_IDS_FETCHED",
        payload: res.body as NameAndId[]
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export default fetchNameAndIds;
