import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import MovieDB from "./containers/MovieDB/MovieDB";
import Nav from "./components/Nav/Nav";
import Genres from "./components/Genres/Genres";
import Login from "./components/Login/Login";
import * as actions from "./store/actions/index";

class App extends Component {
  componentDidMount = () => {
    this.props.checkLogoutTime();
  };
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
          <div style={{width: '100%'}}>
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

const mapDispatchToProps = dispatch => {
  return {
    checkLogoutTime: () => dispatch(actions.checkloginExpiration())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
