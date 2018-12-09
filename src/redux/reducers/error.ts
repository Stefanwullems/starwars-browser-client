import { ErrorAction } from "../types/actions";

export default function(
  state: string | null = null,
  { type, payload }: ErrorAction
): string | null {
  switch (type) {
    case "LOADING_ERROR":
      return payload;
    default:
      return state;
  }
}
