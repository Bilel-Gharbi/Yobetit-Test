import * as TYPE from "../actions/types";

const initialState = {
  score: [],
  slotMachine: [],
  gain: "",
};

const slotMachineReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.START_NEW_GAME:
    case TYPE.PLAY:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default slotMachineReducer;
