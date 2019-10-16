import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import WelcomePage from '../WelcomePage/WelcomPage';
import FullMovie from '../FullMovie/FullMovie';

import './MovieDB.css';


class MovieDB extends Component {

    render(){
        return(
            <div className='MovieDB'>
                <Route path='/' exact component={WelcomePage}></Route>
                <Route path='/' exact component={MovieList}></Route>
                <Route path="/movies/:id" exact component={FullMovie}></Route>
            </div>
        )
    }
}

export default MovieDB;