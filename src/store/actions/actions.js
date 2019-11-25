import axios from "axios";

// export const LOADMOVIES = 'LOADMOVIES';
// export const RELOADMOVIES = 'RELOADMOVIES';

export const loadMovies = (genre, query) => {
  return dispatch => {
    dispatch(itemsLoading(true));
    let movies = [];
    for (let i = 0; i < 5; i++) {
      let page = i;
      let url =
        "https://api.themoviedb.org/3/discover/movie?api_key=65777f92529c3462f958232f137b357f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" +
        page;
      if (genre !== null) {
        url =
          "https://api.themoviedb.org/3/discover/movie?api_key=65777f92529c3462f958232f137b357f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" +
          page +
          "&with_genres=" +
          genre;
      } else if (query !== null) {
        url =
          "https://api.themoviedb.org/3/search/movie?api_key=65777f92529c3462f958232f137b357f&language=en-US&sort_by=popularity.desc&include_adult=false&page=" +
          page +
          "&include_adult=false&query=" +
          query;
      }
      axios.get(url).then(response => {
        console.log(response.data.results);
        movies.push(response.data.results);
        console.log(movies);
        dispatch(loadMoviesData(movies, genre, query));
      });
    }
  };
};

export const itemsLoading = bool => {
  return { type: "ITEMS_LOADING", loading: bool };
};

export const loadMoviesData = (movies, genre, query) => {
  //concat all array to one
  let allMovies = [].concat.apply([], movies);
  console.log(allMovies);

  return {
    type: "LOAD_MOVIES",
    movies: allMovies,
    genre: genre,
    previousQuery: query
  };
};

export const loadFullMovie = id => {
  return dispatch => {
    dispatch(itemsLoading(true));
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          id +
          "?api_key=65777f92529c3462f958232f137b357f&language=en-US&page=1&fbclid=IwAR3WdGpp9ZHMyGn4Vyni4MFF0hpc-Kfvyyj9PLnyueheoQ0o3YIPcmSL5Dk&language=en-US"
      )
      .then(response => {
        dispatch(loadMovie(response.data, id));
      });
  };
};

export const loadMovie = (selectedMovie, id) => {
  let rentRandom = Math.round((Math.random() * 8 * 100) / 100) + 1;
  let buyRandom = Math.round((Math.random() * 15 * 100) / 100) + 7;

  selectedMovie.rentPrice = rentRandom;
  selectedMovie.buyPrice = buyRandom;
  console.log(selectedMovie);
  return {
    type: "LOAD_FULLMOVIE",
    selectedMovie: selectedMovie,
    previousID: id
  };
};

export const loadGenres = () => {
  return dispatch => {
    dispatch(itemsLoading(true));
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=65777f92529c3462f958232f137b357f&language=en-US"
      )
      .then(response => {
        // genres.push(response.data.genres);
        dispatch(loadGenresData(response.data.genres));
      });
  };
};

export const loadGenresData = genres => {
  console.log(genres);
  return {
    type: "LOAD_GENRES",
    genres: genres
  };
};

export const updateQuery = query => {
  return {
    type: "UPDATE_QUERY",
    query: query
  };
};
