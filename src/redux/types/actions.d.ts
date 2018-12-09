import { Action } from "redux";

interface ErrorAction extends Action<LoadingActionType> {
  payload: string;
}

interface LoadingAction extends Action<LoadingActionType> {}
