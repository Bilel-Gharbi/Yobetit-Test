import * as TYPE from "../actions/types";

const initialState = {
  allCountries: [],
  searchedCountries: [],
  searchedCapitals: [],
  allCapitals: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.GET_ALL_COUNTRIES:
      return { ...state, ...action.payload };
    case TYPE.GET_ALL_CAPITALS:
      return { ...state, ...action.payload };

    case TYPE.SEARCH_BY_CAPITAL:
      return { ...state, ...action.payload };

    case TYPE.CLEAR_DATA:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default usersReducer;
