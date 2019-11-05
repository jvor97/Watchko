import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Collapse from "react-bootstrap/Collapse";
import Genres from "../Genres/Genres";

import "./Nav.css";
import logo from "./watchko-logo.png";
import * as actionCreators from "../../store/actions/displayEl";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className="logo">
              <img src={logo} alt="watchko-logo" />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Movies<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={this.props.toggleGenres}
                  aria-controls="example-collapse-text"
                  aria-expanded={this.props.openGenres}
                >
                  Genres
                </button>
              </li>
            </ul>
          </div>
        </div>
        <Genres />
      </nav>
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
    toggleGenres: () => dispatch({ type: "TOGGLE_GENRES" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
