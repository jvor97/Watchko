import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "../../components/Movie/Movie";
import * as actionCreators from "../../store/actions/actions";

class MovieList extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.loadMovies();
  }

  fullPostHandler = id => {
    this.props.history.push("/movies/" + id);
  };

  render() {

    const style = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'stretch',
      paddingTop: '1.5rem'
    }

    if (this.props.movies) {
      console.log(this.props.movies[0]);
    }

    let movies = <p>Something went wrong</p>;
    // if (!this.props.error) {
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
  };
};

// mapDispatchToProps = dispatch => {
//   return {
//     onMount : () => dispatch({type: actionType.LOADMOVIES})
//   }
// }

export default connect(
  mapStateToProps,
  actionCreators
)(MovieList);
