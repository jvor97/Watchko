/* eslint-disable default-case */
// import * as actionTypes from '../actions/actionTypes';

let initialState = {
  openGenres: false,
  openLogin: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_GENRES":
      return {
        ...state,
        openGenres: !state.openGenres
      };
    case "TOGGLE_LOGIN":
      return {
        ...state,
        openLogin: !state.openLogin
      };
  }
  return state;
};

export default reducer;
