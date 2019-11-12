/* eslint-disable default-case */
// import * as actionTypes from '../actions/actionTypes';

let initialState = {
  openGenres: false,
  openLogin: false,
  displaySignUp: false
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
        openLogin: !state.openLogin,
        displaySignUp: false
      };
    case "DISPLAY_SIGNUP":
      return {
        ...state,
        displaySignUp: true
      };
    case "HIDE_SIGNUP":
      return {
        ...state,
        displaySignUp: false
      };
  }
  return state;
};

export default reducer;
