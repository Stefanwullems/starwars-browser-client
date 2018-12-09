import { ContentAction } from "../types/actions";

export default function(): ContentAction {
  return {
    type: "CLEAN_UP_CONTENT"
  };
}
