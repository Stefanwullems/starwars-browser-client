import { ContentAction } from "../types/actions";

export default function(
  state: Content | null = null,
  { type, payload }: ContentAction
): Content | null {
  switch (type) {
    case "PLANETS_FETCHED":
      return payload;
    case "PLANET_FETCHING_ERROR":
    default:
      return state;
  }
}
