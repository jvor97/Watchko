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
      <nav className="Nav navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {/* <div className="logo"> */}
            <img src={logo} alt="watchko-logo" />
            {/* </div> */}
          </Link>
          <div className="d-flex ml-auto">
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
          </div>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <form className="form-navbar my-2 my-lg-0 order-2">
              <input
                className="form-control"
                name="s"
                type="text"
                placeholder="Search"
              ></input>
            </form>
            <ul className="navbar-nav mr-auto order-1">
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">
                  Movies<span className="sr-only">(current)</span>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <p
                  className="nav-link"
                  onClick={this.props.toggleGenres}
                  // aria-controls="example-collapse-text"
                  // aria-expanded={this.props.openGenres}
                >
                  Genres
                </p>
              </li>
            </ul>
            <ul className="navbar-nav d-none d-lg-flex order-3">
              <li className="nav-item">
                <Link className="nav-link" to="/sign">
                  Sign in/ up
                </Link>
              </li>
            </ul>
            {/* <ul className="navbar-nav d-lg-none">
              <li className="nav-item-divider"></li>
              <li className="nav-item">
                <Link className="nav-link" to="/sign">
                  Sign in / Sign up
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     openGenres: state.displayEl.openGenres
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    toggleGenres: () => dispatch({ type: "TOGGLE_GENRES" })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Nav);
