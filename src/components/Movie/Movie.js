import React, {Component} from 'react';

import './Movie.css';

class Movie extends Component {

    render(){
        return (
          <div className="Movie card" onClick={this.props.clicked}>
            <img
              src={'https://image.tmdb.org/t/p/w200/' + this.props.img}
              alt="Card image"
            />
            <h5 className="card-title list-movie-title">{this.props.title}</h5>

          </div>
        );
    }
}

export default Movie;