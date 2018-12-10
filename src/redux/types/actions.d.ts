import { Action } from "redux";

interface ErrorAction extends Action<LoadingActionType> {
  payload?: string;
}

interface LoadingAction extends Action<LoadingActionType> {}

interface ContentAction extends Action<ContentActionType> {
  payload?: Content;
}

interface ContentCountAction extends Action<ContentCountActionType> {
  payload: number;
}
