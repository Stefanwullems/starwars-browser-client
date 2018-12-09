import { createStore, compose, applyMiddleware } from "redux";
import Thunk from "redux-thunk";

import rootReducer from "./reducers";

const devTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const enhancer = compose(
  applyMiddleware(Thunk),
  devTools
);

const store = createStore(rootReducer, enhancer);

export default store;
