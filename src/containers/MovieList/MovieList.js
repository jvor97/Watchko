import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import {connect} from 'react-redux';
import Movie from "../../components/Movie/Movie";
import FullMovie from "../FullMovie/FullMovie";
import "./MovieList.css";
import * as actionCreators from '../../store/actions/actions';

class MovieList extends Component {
  state = {
    displayHalfPage: false
  };

 componentDidMount() {
    console.log(this.props);
  this.props.loadMovies();
  }

  fullPostHandler = id => {
    this.props.history.push("/movies/" + id);
  };

  render() {
    let movies = <p>Something went wrong</p>;
    // if (!this.props.error) {
      console.log(this.props.movies);
      if (this.props.movies) {
        movies = this.props.movies.map(movie => {
          return (
            <Movie
              title={movie.title}
              img={movie.poster_path}
              key={movie.id}
              clicked={() => this.fullPostHandler(movie.id)}
            ></Movie>
          );
        });
      }
    

    return (
      <div >
        <div className='movies'>{movies}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.api.movies,
    error: state.api.error,
    halfPage: state.api.displayHalfPage
  };
};


// mapDispatchToProps = dispatch => {
//   return {
//     onMount : () => dispatch({type: actionType.LOADMOVIES})
//   } 
// }

export default connect(mapStateToProps,actionCreators)(MovieList);
