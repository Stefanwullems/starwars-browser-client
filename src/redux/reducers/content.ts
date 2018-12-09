import { ContentAction } from "../types/actions";

export default function(
  state: Content | null = null,
  { type, payload }: ContentAction
): Content | null {
  switch (type.includes("FETCHED")) {
    case true:
      return payload;
    case false:
      if (type.includes("ERROR")) return null;
    default:
      return state;
  }
}
