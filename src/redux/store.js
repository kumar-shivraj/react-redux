import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk";

// import { cakeReducer } from "./cake/cakeReducer";

// const store = createStore(cakeReducer);
// const store = createStore(rootReducer, applyMiddleware(logger));
// const store = createStore(rootReducer, applyMiddleware(logger));
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
