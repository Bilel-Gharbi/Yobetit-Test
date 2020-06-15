import * as TYPE from "../actions/types";

const initialState = {
  component: "",
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.SET_COMPONENT_TO_RENDER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default uiReducer;
