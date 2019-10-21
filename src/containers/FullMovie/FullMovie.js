import React, { Component } from "react";

import FullMovieButtons from "../../components/FullMovieButtons/FullMovieButtons";
import axios from "axios";
import { connect } from "react-redux";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


import "./FullMovie.css";
import * as actionCreators from "../../store/actions/actions";



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

  //   componentDidUpdate() {
  //     if (this.props.match.params.id) {
  //       if (this.props.match.params.id != this.props.previousID) {
  //     this.props.loadFullMovie(this.props.match.params.id);
  //       }
  //   }
  // }

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

  removeHandler = () => {
    this.props.history.push("/");
  };

  getRating = (voteAverage) => {
    let rating;
    if (voteAverage <= 2) {
      rating = 1
    } else if (voteAverage <= 4) {
      rating = 2
    } else if (voteAverage <= 6) {
      rating = 3
    }else if (voteAverage <= 8) {
      rating = 4
    }else {
      rating = 5
    }
    return rating;
  }

  render() {


    let movie = <p>Please select a movie</p>;
    if (this.props.match.params.id) {
      movie = <p>Loading please wait...</p>;
    }
    if (this.props.fullMovie) {
      let genres = this.props.fullMovie.genres.map(genre => genre.name + " | ");

      console.log(this.getRating(this.props.fullMovie.vote_average));
      movie = (
        <div>
          <div className="card bg-dark">
            {/* <img
              className="poster"
              src={
                "https://image.tmdb.org/t/p/original/" +
                this.props.fullMovie.poster_path
              }
            /> */}
            <img
              className="bg-image"
              src={
                "https://image.tmdb.org/t/p/original/" +
                this.props.fullMovie.backdrop_path
              }
            />
            <div className="card-img-overlay" style={{ paddingTop: "2.2rem" }}>
              <div className="main-info">
                <h3 className="FM-title">{this.props.fullMovie.title}</h3>
                <h5 className="tagline">{this.props.fullMovie.tagline}</h5>
                <div className="card-text">{this.props.fullMovie.overview}</div>
              </div>
              {/* <div className="basic-info-movie"> */}
              <Rater total={5} rating={this.getRating(this.props.fullMovie.vote_average)} interactive={false}/>
              <div className="genres">
                <h6>{genres}</h6>
              </div>
              <div className="release-date">
                <div className="date">
                  <div>{this.props.fullMovie.release_date.split("-")[2]}</div>
                  <div>{this.props.fullMovie.release_date.split("-")[1]}</div>
                </div>
                <div className="year">
                  {this.props.fullMovie.release_date.split("-")[0]}
                </div>
              </div>
              <div className="runtime">{this.props.fullMovie.runtime + " min"}</div>
          
              {/* </div> */}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="FullMovie">
        {movie}
        <FullMovieButtons onRemove={this.removeHandler} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fullMovie: state.api.selectedMovie,
    previousID: state.api.previousID,
    displayAbout: state.displayEl.displayAbout
  };
};

// mapDispatchToProps = state => {
//   return {

//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(FullMovie);

export default connect(
  mapStateToProps,
  actionCreators
)(FullMovie);
