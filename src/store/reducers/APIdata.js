

let initialState = {
  movies: [],
  selectedMovie: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_MOVIES":
      console.log(action.movies);
      return {
        ...state,
        movies: action.movies
      };
    case "LOAD_FULLMOVIE":
      console.log(action.selectedMovie);
      return {
        ...state,
        selectedMovie: action.selectedMovie
      };
  }
  return state;
};

export default reducer;