import React, {Component} from 'react';
import FullMovie from './FullMovie';
import MovieList from './MovieList';

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