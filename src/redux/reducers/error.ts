import { ErrorAction } from "../types/actions";

export default function(
  state: string | null = null,
  { type, payload }: ErrorAction
): string | null {
  switch (type) {
    case "LOADING":
      return payload;
    case "LOADING_ERROR":
    case "LOADING_SUCCESS":
      return payload;
    default:
      return state;
  }
}
