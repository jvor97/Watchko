import React, {Component} from 'react';
import Movie from '../../components/Movie/Movie';

class MovieList extends Component {

    render(){
        return(
            <div>
                <Movie/>
                <Movie/>
                <Movie/>
            </div>
        )
    }
}

export default MovieList;