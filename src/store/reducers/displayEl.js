import * as actionTypes from '../actions/actionTypes';

let initialState = {
    displayAbout: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_ABOUT:
      return {
        ...state,
        displayAbout: true
      };
      case 'CLOSE.ABOUT':
        return{
          ...state,
          displayAbout: false
        }
  }
  return state;
};


export default reducer;