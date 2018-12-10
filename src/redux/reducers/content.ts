import { ContentAction } from "../types/actions";

export default function(
  state: Content | null = null,
  { type, payload }: ContentAction
): Content | null {
  switch (type) {
    case "CONTENT_FETCHED":
      return payload;
    case "CLEAN_UP_CONTENT":
      return null;
    default:
      return state;
  }
}
