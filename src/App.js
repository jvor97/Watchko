import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import MovieDB from "./containers/MovieDB/MovieDB";
import Nav from "./components/Nav/Nav";
import Genres from "./components/Genres/Genres";
import Login from "./components/Login/Login";

class App extends Component {
  render() {
    console.log(this.props.openGenres);
    console.log(this.props);
    let genres;
    if (this.props.openGenres) {
      genres = <Genres />;
    }

    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <Nav />
            <MovieDB />
            <Login />
          </div>
          {genres}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    openGenres: state.displayEl.openGenres
  };
};

export default connect(mapStateToProps)(App);
