import { combineReducers } from "redux";
import postsReducer from "../reducers";

export const rootReducer = combineReducers({
  postsReducer,
});
