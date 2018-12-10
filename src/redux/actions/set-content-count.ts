interface IAction {
  type: "SET_CONTENT_COUNT";
  payload: number;
}

function setContentCount(count: number): IAction {
  return { type: "SET_CONTENT_COUNT", payload: count };
}

export default setContentCount;
