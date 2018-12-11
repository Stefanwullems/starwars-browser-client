import { Action } from "redux";

interface LoadingAction extends Action<LoadingActionType> {}

interface ContentAction extends Action<ContentActionType> {
  payload?: Content;
}

interface ContentCountAction extends Action<ContentCountActionType> {
  payload: number;
}
