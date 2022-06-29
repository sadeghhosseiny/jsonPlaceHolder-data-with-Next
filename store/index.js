import { applyMiddleware, createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { rootReducer } from "./combineReducers";

const bindMiddleWare = (middleWare) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleWare));
  }
  return applyMiddleware(...middleWare);
};

const theStore = () => {
  const store = createStore(rootReducer, bindMiddleWare([thunk]));
  return store;
};

export const wrapper = createWrapper(theStore);
