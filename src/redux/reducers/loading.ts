import { LoadingAction } from "../types/actions";

export default function(
  state: boolean = false,
  { type }: LoadingAction
): boolean {
  switch (type) {
    case "LOADING":
      return true;
    case "LOADING_ERROR":
    case "LOADING_SUCCESS":
      return false;
    default:
      return state;
  }
}
