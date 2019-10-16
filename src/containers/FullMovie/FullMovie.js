import React, { Component } from "react";

import FullMovieButtons from "../../components/FullMovieButtons/FullMovieButtons";
import axios from "axios";
import {connect} from 'react-redux';

import './FullMovie.css';
import * as actionCreators from '../../store/actions/actions';

class FullMovie extends Component {
  state = {
    selectedMovie: null,
    previousID: null
  };

  componentDidMount() {
    if (this.props.match.params.id) {
          if (this.props.match.params.id != this.props.previousID) {
    this.props.loadFullMovie(this.props.match.params.id);
    }
  }
}

  componentDidUpdate() {
    if (this.props.match.params.id) {
      if (this.props.match.params.id != this.props.previousID) {
    this.props.loadFullMovie(this.props.match.params.id);
      }
  }
}

  // loadMovieDataHandler() {
  //   if (this.props.match.params.id) {
  //     if (this.props.match.params.id != this.state.previousID) {
  //       axios
  //         .get(
  //           "https://api.themoviedb.org/3/movie/" +
  //             this.props.match.params.id +
  //             "?api_key=65777f92529c3462f958232f137b357f&language=en-US&page=1&fbclid=IwAR3WdGpp9ZHMyGn4Vyni4MFF0hpc-Kfvyyj9PLnyueheoQ0o3YIPcmSL5Dk&language=en-US"
  //         )
  //         .then(response =>
  //           this.setState({
  //             selectedMovie: response.data,
  //             previousID: this.props.match.params.id
  //           })
  //         );
  //     }
  //   }
  // }

  deleteHandler = () => {
    this.props.history.push('/');
  }

  render() {
    let movie = <p>Please selest a movie</p>;
    if (this.props.match.params.id) {
      movie = <p>Loading please wait...</p>;
    }
    if (this.props.fullMovie) {
      let genres = this.props.fullMovie.genres.map(
        genre => genre.name + " | "
      );

      movie = (
        <div className="card bg-dark">
          <img
            className="card-img"
            src={
              "https://image.tmdb.org/t/p/w300/" +
              this.props.fullMovie.poster_path
            }
          />
          <div className="card-img-overlay">
            <h1 className="card-title">{this.props.fullMovie.title}</h1>
            <h5>{genres}</h5>
            <div className="card-text">
              <p>{this.props.fullMovie.release_date}</p>
              <p>{this.props.fullMovie.runtime + " min"}</p>
            </div>
            <div className="card-text">{this.props.fullMovie.overview}</div>
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

const mapStateToProps = state => {
  return {
    fullMovie: state.api.selectedMovie,
    previousID: state.api.previousID
  }
}

// mapDispatchToProps = state => {
//   return {

//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(FullMovie);

export default connect(mapStateToProps, actionCreators)(FullMovie);
