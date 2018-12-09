import { createStore, compose, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import plainify from "redux-plainify";

import rootReducer from "./reducers";

const devTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const enhancer = compose(
  applyMiddleware(Thunk.withExtraArgument(fetch)),
  devTools,
  plainify
);

const store = createStore(rootReducer, enhancer);

export default store;
