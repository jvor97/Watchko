import React, {Component} from 'react';

import './Movie.css';

class Movie extends Component {

    render(){
        return (
          <div className="card bg-dark text-white">
            <img
              className="card-img"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/HeathJoker.png/220px-HeathJoker.png"
              alt="Card image"
            />
            <h5 className="card-title">Card title</h5>

          </div>
        );
    }
}

export default Movie;