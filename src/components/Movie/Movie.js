import React, {Component} from 'react';

import './Movie.css';

class Movie extends Component {

    render(){
        return(
            <div className='Movie card'>
                <h4 className='card-title'>This is a title</h4>
            </div>
        )
    }
}

export default Movie;