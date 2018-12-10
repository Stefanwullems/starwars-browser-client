import { ContentCountAction } from "../types/actions";

export default function(
  state: number | null = null,
  { type, payload }: ContentCountAction
): number | null {
  switch (type) {
    case "SET_CONTENT_COUNT":
      return payload;
    case "CLEAN_UP_CONTENT":
      return null;
    default:
      return state;
  }
}
