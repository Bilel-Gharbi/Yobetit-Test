import axios from "axios";
import * as TYPE from "./types"; //import types

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

export const startNewGame = () => async (dispatch) => {
  try {
    let response = await api.post("game");
    //clear error
    dispatch({
      type: TYPE.CLEAR_ERRORS,
    });

    console.log(response);

    //dispatch and return LOGIN action to set state
    return dispatch({
      type: TYPE.START_NEW_GAME,
      payload: {
        ...response.data.result,
        gain: 0,
      },
    });
  } catch (err) {
    // in case of Error Dispatch and RETURN_ERROR action
    return dispatch({
      type: TYPE.SET_ERRORS,
      payload: {
        status: "start game error",
        message: err.message,
      },
    });
  }
};

export const play = (data) => async (dispatch) => {
  try {
    let response = await api.post("game", data);
    //clear error
    dispatch({
      type: TYPE.CLEAR_ERRORS,
    });

    if (!response.data.result.score) {
      dispatch({
        type: TYPE.YOU_LOOSE,
      });
    }

    return dispatch({
      type: TYPE.PLAY,
      payload: {
        ...response.data.result,
      },
    });
  } catch (err) {
    // in case of Error Dispatch and RETURN_ERROR action
    return dispatch({
      type: TYPE.SET_ERRORS,
      payload: {
        status: "start game error",
        message: err.message,
      },
    });
  }
};
