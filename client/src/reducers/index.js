import { combineReducers } from "redux";

import countiesReducer from "./countries";
import errorReducer from "./error";
import uiReducer from "./ui";

export default combineReducers({
  countries: countiesReducer,
  error: errorReducer,
  ui: uiReducer,
});
