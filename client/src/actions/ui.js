import * as TYPE from "./types"; //import types

export const setComponentToRender = (text) => async (dispatch) => {
  try {
    //clear error
    dispatch({
      type: TYPE.CLEAR_ERRORS,
    });

    //dispatch and return LOGIN action to set state
    return dispatch({
      type: TYPE.SET_COMPONENT_TO_RENDER,
      payload: {
        component: text,
      },
    });
  } catch (err) {
    // in case of Error Dispatch and RETURN_ERROR action
    return dispatch({
      type: TYPE.SET_ERRORS,
      payload: {
        status: "ui error",
        message: "set page ui error",
      },
    });
  }
};
