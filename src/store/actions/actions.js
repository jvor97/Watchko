import axios from 'axios';

// export const LOADMOVIES = 'LOADMOVIES';
// export const RELOADMOVIES = 'RELOADMOVIES';

export const loadMovies = () =>{
    return(dispatch) => {
        return axios.get(
            "https://api.themoviedb.org/3/movie/popular?api_key=65777f92529c3462f958232f137b357f&language=en-US&page=1&fbclid=IwAR3WdGpp9ZHMyGn4Vyni4MFF0hpc-Kfvyyj9PLnyueheoQ0o3YIPcmSL5Dkhttps://jsonplaceholder.typicode.com/posts"
          )
          .then(response => {
            dispatch(loadMoviesData(response.data.results));
          })
    }
}

export const loadMoviesData = (movies) => {
    console.log(movies);
    return{
        type: 'LOAD_MOVIES',
        movies: movies
    }
}

export const loadFullMovie = () =>{
    return(dispatch) => {
        return axios.get(
                  "https://api.themoviedb.org/3/movie/" +
                    this.props.match.params.id +
                    "?api_key=65777f92529c3462f958232f137b357f&language=en-US&page=1&fbclid=IwAR3WdGpp9ZHMyGn4Vyni4MFF0hpc-Kfvyyj9PLnyueheoQ0o3YIPcmSL5Dk&language=en-US"
                ).then(response => {
            dispatch(loadMovie(response.data));
          })
    }
}

export const loadMovie = (selectedMovie) => {
    console.log(movies);
    return{
        type: 'LOAD_FULLMOVIE',
        selectedMovie: selectedMovie
    }
}



