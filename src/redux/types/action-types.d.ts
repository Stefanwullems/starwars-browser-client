type LoadingActionType = "LOADING" | "LOADING_ERROR" | "LOADING_SUCCESS";

type ContentActionType =
  | "CONTENT_FETCHED"
  | "CLEAN_UP_CONTENT"
  | "SET_CONTENT_COUNT";

type NamesAndIdsActionType =
  | "NAMES_AND_IDS_FETCHED"
  | "CLEAN_UP_NAMES_AND_IDS"
  | "FETCHING_NAMES_AND_IDS";

type ContentCountActionType = "CLEAN_UP_CONTENT" | "SET_CONTENT_COUNT";
