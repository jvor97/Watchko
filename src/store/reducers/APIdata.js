let initialState = {
  loading: false,
  movies: [],
  selectedMovie: null,
  previousID: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ITEMS_LOADING":
    return {
      ...state,
      loading: action.loading
    };
    case "LOAD_MOVIES":
      return {
        ...state,
        movies: action.movies
      };
    case "LOAD_FULLMOVIE":
      console.log(action.selectedMovie);
      return {
        ...state,
        selectedMovie: action.selectedMovie,
        previousID: action.previousID
      };
  }
  return state;
};


export default reducer;