import React, {Component} from 'react';

import './Movie.css';

class Movie extends Component {

    render(){
        return (
          <div className="card bg-dark text-white" onClick={this.props.clicked}>
            <img
              className="card-img"
              src={'https://image.tmdb.org/t/p/w200/' + this.props.img}
              alt="Card image"
            />
            <h5 className="card-title">{this.props.title}</h5>

          </div>
        );
    }
}

export default Movie;