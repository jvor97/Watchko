import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import MovieList from '../MovieList/MovieList';

import './MovieDB.css';

class MovieDB extends Component {

    render(){
        return(
            <div className='MovieDB'>
                <Route path='/' component={MovieList}></Route>
            </div>
        )
    }
}

export default MovieDB;