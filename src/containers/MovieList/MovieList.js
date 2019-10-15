import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Movie from "../../components/Movie/Movie";
import FullMovie from "../FullMovie/FullMovie";
import "./MovieList.css";

class MovieList extends Component {
  state = {
    movies: [],
    error: "",
    displayHalfPage: false
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=65777f92529c3462f958232f137b357f&language=en-US&page=1&fbclid=IwAR3WdGpp9ZHMyGn4Vyni4MFF0hpc-Kfvyyj9PLnyueheoQ0o3YIPcmSL5Dkhttps://jsonplaceholder.typicode.com/posts"
      )
      .then(response => {
        this.setState({ movies: response.data });
      })
      .catch(error => {
        this.setState({ error: error });
      });
  }

  fullPostHandler = id => {
    this.props.history.push("/" + id);
    this.setState({
      displayHalfPage: true
    })
  };

  render() {
    let movieListClasses = ['movies'];
    if (this.state.displayHalfPage) {
      movieListClasses.push('halfPage');
    }
    let movies = <p>Something went wrong</p>;
    if (!this.state.error) {
      if (this.state.movies.results) {
        movies = this.state.movies.results.map(movie => {
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
    }

    console.log(this.state.movies);
    return (
      <div >
        <div className={movieListClasses.join(' ')}>{movies}</div>
        <Route path="/:id" component={FullMovie}></Route>
      </div>
    );
  }
}

export default MovieList;
