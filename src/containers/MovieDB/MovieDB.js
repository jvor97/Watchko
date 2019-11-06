import React, { Component } from "react";
import { Route } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import FullMovie from "../FullMovie/FullMovie";
import About from "../About/About";

class MovieDB extends Component {
  render() {
    return (
      <div className="MovieDB" style={{ marginTop: "-2rem" }}>
        <Route path="/" exact component={MovieList}></Route>
        <Route path="/genre/:genre" exact component={MovieList}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/movies/:id" exact component={FullMovie}></Route>
      </div>
    );
  }
}

export default MovieDB;
