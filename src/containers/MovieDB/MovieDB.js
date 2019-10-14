import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import MovieList from '../MovieList/MovieList';

class MovieDB extends Component {

    render(){
        return(
            <div>
                <Route path='/' component={MovieList}></Route>
            </div>
        )
    }
}

export default MovieDB;