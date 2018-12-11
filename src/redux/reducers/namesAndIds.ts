import { NamesAndIdsAction } from "../types/actions";

export default function(
  state: NameAndId[] | null = null,
  { type, payload }: NamesAndIdsAction
): NameAndId[] {
  switch (type) {
    case "NAMES_AND_IDS_FETCHED":
      return payload;
    case "CLEAN_UP_NAMES_AND_IDS":
      return null;
    default:
      return state;
  }
}
