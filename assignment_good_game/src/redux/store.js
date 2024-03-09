import { createStore, combineReducers } from "redux";
import { getDataReducre } from "./reducer";

const rootReducer = combineReducers({
  data: getDataReducre,
});

export const store = createStore(rootReducer);
