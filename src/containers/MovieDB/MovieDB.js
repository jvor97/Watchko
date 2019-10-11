import React, {Component} from 'react';
import FullMovie from '../FullMovie/FullMovie';
import MovieList from '../MovieList/MovieList';

class MovieDB extends Component {

    render(){
        return(
            <div>
                <MovieList/>
                <FullMovie/>
            </div>
        )
    }
}

export default MovieDB;