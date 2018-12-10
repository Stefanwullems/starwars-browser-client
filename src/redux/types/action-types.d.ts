type LoadingActionType = "LOADING" | "LOADING_ERROR" | "LOADING_SUCCESS";

type ContentActionType =
  | "CONTENT_FETCHED"
  | "CLEAN_UP_CONTENT"
  | "SET_CONTENT_COUNT";

type ContentCountActionType = "CLEAN_UP_CONTENT" | "SET_CONTENT_COUNT";
