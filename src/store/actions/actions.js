import axios from 'axios';
import { bool } from 'prop-types';

// export const LOADMOVIES = 'LOADMOVIES';
// export const RELOADMOVIES = 'RELOADMOVIES';

export const loadMovies = () =>{
    return(dispatch) => {
        dispatch(itemsLoading(true));
        let movies = [];
        for (let i = 0; i < 5; i++) {
            let page = i;
            axios.get(
                "https://api.themoviedb.org/3/movie/popular?api_key=65777f92529c3462f958232f137b357f&language=en-US&page=" + page + "&fbclid=IwAR3WdGpp9ZHMyGn4Vyni4MFF0hpc-Kfvyyj9PLnyueheoQ0o3YIPcmSL5Dkhttps://jsonplaceholder.typicode.com/posts"
              )
              .then(response => {
               movies.push(response.data.results)
                dispatch(loadMoviesData(movies));
              })
        }
    }
}

export const itemsLoading = bool => {
   return{ type: 'ITEMS_LOADING',
    loading: bool
   }
}

export const loadMoviesData = (movies) => {
    console.log(movies);
    //concat all array to one 
    var allMovies = [].concat.apply([], movies);

    return{
        type: 'LOAD_MOVIES',
        movies: allMovies
    }
}

export const loadFullMovie = (id) =>{
    return(dispatch) => {
        dispatch(itemsLoading(true));
        axios.get(
                  "https://api.themoviedb.org/3/movie/" +
                    id +
                    "?api_key=65777f92529c3462f958232f137b357f&language=en-US&page=1&fbclid=IwAR3WdGpp9ZHMyGn4Vyni4MFF0hpc-Kfvyyj9PLnyueheoQ0o3YIPcmSL5Dk&language=en-US"
                ).then(response => {
            dispatch(loadMovie(response.data,id));
          })
    }
}

export const loadMovie = (selectedMovie,id) => {
    console.log(selectedMovie);
    return{
        type: 'LOAD_FULLMOVIE',
        selectedMovie: selectedMovie,
        previousID: id
    }
}



