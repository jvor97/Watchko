import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "../../components/Movie/Movie";
import * as actionCreators from "../../store/actions/actions";

class MovieList extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.onLoadMovies(" ");
  }

  componentDidUpdate() {
    let genre = this.props.match.params.genre;
    if (genre) {
      if (genre != this.props.genre) {
        this.props.onLoadMovies(genre);
        //ak g z url je iny ako g v state take update a set g v state na ten z url
      }
    }
  }

  fullPostHandler = id => {
    this.props.history.push("/movies/" + id);
  };

  render() {
    const style = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      alignItems: "stretch",
      alignContent: "stretch"
    };

    let movies = <p>Something went wrong</p>;
    if (this.props.loading) {
      movies = <p>Loading ...</p>;
    }
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
      <div>
        <div style={style}>{movies}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.api.movies,
    loading: state.api.loading,
    genre: state.api.genre
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadMovies: genre => dispatch(actionCreators.loadMovies(genre))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
