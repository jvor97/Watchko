/* eslint-disable default-case */
let initialState = {
  loading: false,
  movies: [],
  selectedMovie: null,
  previousID: null,
  genres: null
  // genre: ""
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
        movies: action.movies,
        genre: action.genre
      };
    case "LOAD_FULLMOVIE":
      console.log(action.selectedMovie);
      return {
        ...state,
        selectedMovie: action.selectedMovie,
        previousID: action.previousID
      };
    case "LOAD_GENRES":
      console.log(action.genres);
      console.log(state.genres);
      return {
        ...state,
        genres: action.genres
      };
  }
  console.log(state.genres);
  return state;
};

export default reducer;
