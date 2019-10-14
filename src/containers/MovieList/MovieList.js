import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Movie from '../../components/Movie/Movie';
import FullMovie from '../FullMovie/FullMovie';

class MovieList extends Component {

    render(){
        return(
            <div>
                 <Route path={this.props.match.url + '/:id'} component={FullMovie}></Route>
            </div>
        )
    }
}

export default MovieList;