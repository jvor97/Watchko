import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "../../components/Movie/Movie";
import * as actionCreators from "../../store/actions/actions";

export class MovieList extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.onLoadMovies(null, null);
  }

  componentDidUpdate() {
    let genre = this.props.match.params.genre;
    let query = this.props.query;
    console.log(this.props.previousQuery);
    console.log(this.props.query);

    if (query !== null && query.length > 0 && query !== undefined) {
      if (this.props.previousQuery != query) {
        console.log("q update");
        this.props.onLoadMovies(null, query);
        //ak g z url je iny ako g v state take update a set g v state na ten z url
      }
    }

    if (genre !== null && genre !== undefined) {
      if (genre != this.props.genre) {
        this.props.onLoadMovies(genre, null);
        //ak g z url je iny ako g v state take update a set g v state na ten z url
      }
    }
    // if (query !== null && query.length > 0 && query !== undefined) {
    //   if (this.props.previousQuery != query) {
    //     console.log("q update");
    //     this.props.onLoadMovies(null, query);
    //     //ak g z url je iny ako g v state take update a set g v state na ten z url
    //   }
    // }
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
    genre: state.api.genre,
    previousQuery: state.api.previousQuery,
    query: state.api.query
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadMovies: (genre, search) =>
      dispatch(actionCreators.loadMovies(genre, search))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
