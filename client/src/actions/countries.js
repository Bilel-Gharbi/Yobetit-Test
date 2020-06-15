import axios from "axios";
import * as TYPE from "./types"; //import types

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

export const getAllCountries = () => async (dispatch) => {
  try {
    const response = await api.get("/countries");

    //clear error
    dispatch({
      type: TYPE.CLEAR_ERRORS,
    });

    return dispatch({
      type: TYPE.GET_ALL_COUNTRIES,
      payload: {
        allCountries: response.data.result,
      },
    });
  } catch (err) {
    // in case of Error Dispatch and RETURN_ERROR action
    return dispatch({
      type: TYPE.SET_ERRORS,
      payload: {
        status: err.response.data.status,
        message: err.response.data.message,
      },
    });
  }
};

export const searchForCountry = (term) => async (dispatch) => {
  try {
    const response = await api.get(`/search?term=${term}`);
    //clear error
    dispatch({
      type: TYPE.CLEAR_ERRORS,
    });

    //dispatch and return LOGIN action to set state
    return dispatch({
      type: TYPE.GET_ALL_COUNTRIES,
      payload: {
        searchedCountries: response.data.result,
      },
    });
  } catch (err) {
    return dispatch({
      type: TYPE.SET_ERRORS,
      payload: {
        status: err.response.data.status,
        message: err.response.data.message,
      },
    });
  }
};
export const searchForCountryByCapital = (term) => async (dispatch) => {
  try {
    const response = await api.get(`/search?term=${term}&by=capital`);
    //clear error
    dispatch({
      type: TYPE.CLEAR_ERRORS,
    });

    return dispatch({
      type: TYPE.SEARCH_BY_CAPITAL,
      payload: {
        searchedCapitals: response.data.result,
      },
    });
  } catch (err) {
    // in case of Error Dispatch and RETURN_ERROR action
    return dispatch({
      type: TYPE.SET_ERRORS,
      payload: {
        status: err.response.data.status,
        message: err.response.data.message,
      },
    });
  }
};

export const getAllCapitalsCountries = () => async (dispatch) => {
  try {
    const response = await api.get(`/countries?term=capital`);
    //clear error
    dispatch({
      type: TYPE.CLEAR_ERRORS,
    });

    //dispatch and return LOGIN action to set state
    return dispatch({
      type: TYPE.GET_ALL_CAPITALS,
      payload: {
        allCapitals: response.data.result,
      },
    });
  } catch (err) {
    // in case of Error Dispatch and RETURN_ERROR action
    return dispatch({
      type: TYPE.SET_ERRORS,
      payload: {
        status: err.response.data.status,
        message: err.response.data.message,
      },
    });
  }
};

export const clearData = (filed) => async (dispatch) => {
  try {
    //clear error
    dispatch({
      type: TYPE.CLEAR_ERRORS,
    });

    let obj = {};
    obj[filed] = [];
    //dispatch and return LOGIN action to set state
    return dispatch({
      type: TYPE.CLEAR_DATA,
      payload: {
        ...obj,
      },
    });
  } catch (err) {
    // in case of Error Dispatch and RETURN_ERROR action
    return dispatch({
      type: TYPE.SET_ERRORS,
      payload: {
        status: "clear data error ",
        message: err.message,
      },
    });
  }
};
