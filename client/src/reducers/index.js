import { combineReducers } from "redux";

import countiesReducer from "./countries";
import slotMachineReducer from "./slotMachine";
import errorReducer from "./error";

export default combineReducers({
  countries: countiesReducer,
  error: errorReducer,
  game: slotMachineReducer,
});
