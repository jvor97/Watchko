import React, { Component } from "react";

import FullMovieButtons from "../../components/FullMovieButtons/FullMovieButtons";
import axios from "axios";

import './FullMovie.css';

class FullMovie extends Component {
  state = {
    selectedMovie: null,
    previousID: null
  };

  componentDidMount() {
    this.loadMovieDataHandler();
  }

  componentDidUpdate() {
    this.loadMovieDataHandler();
  }

  loadMovieDataHandler() {
    if (this.props.match.params.id) {
      if (this.props.match.params.id != this.state.previousID) {
        axios
          .get(
            "https://api.themoviedb.org/3/movie/" +
              this.props.match.params.id +
              "?api_key=65777f92529c3462f958232f137b357f&language=en-US&page=1&fbclid=IwAR3WdGpp9ZHMyGn4Vyni4MFF0hpc-Kfvyyj9PLnyueheoQ0o3YIPcmSL5Dk&language=en-US"
          )
          .then(response =>
            this.setState({
              selectedMovie: response.data,
              previousID: this.props.match.params.id
            })
          );
      }
    }
  }

  deleteHandler = () => {
    this.props.history.push('/');
  }

  render() {
    let movie = <p>Please selest a movie</p>;
    if (this.props.match.params.id) {
      movie = <p>Loading please wait...</p>;
    }
    if (this.state.selectedMovie) {
      let genres = this.state.selectedMovie.genres.map(
        genre => genre.name + " | "
      );

      movie = (
        <div className="card bg-dark">
          <img
            className="card-img"
            src={
              "https://image.tmdb.org/t/p/w300/" +
              this.state.selectedMovie.poster_path
            }
          />
          <div className="card-img-overlay">
            <h1 className="card-title">{this.state.selectedMovie.title}</h1>
            <h5>{genres}</h5>
            <div className="card-text">
              <p>{this.state.selectedMovie.release_date}</p>
              <p>{this.state.selectedMovie.runtime + " min"}</p>
            </div>
            <div className="card-text">{this.state.selectedMovie.overview}</div>
          </div>
        </div>
      );
    }

    return (
      <div className='FullMovie'>
        {movie}
        <FullMovieButtons clicked={this.deleteHandler}/>
      </div>
    );
  }
}

export default FullMovie;
