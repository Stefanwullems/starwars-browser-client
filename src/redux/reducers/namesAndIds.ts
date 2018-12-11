import { NamesAndIdsAction } from "../types/actions";

export default function(
  state: NamesAndIds | null = null,
  { type, payload }: NamesAndIdsAction
): NamesAndIds {
  switch (type) {
    case "NAMES_AND_IDS_FETCHED":
      return payload;
    case "CLEAN_UP_NAMES_AND_IDS":
      return null;
    default:
      return state;
  }
}
