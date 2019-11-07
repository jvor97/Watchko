import React, { Component, Suspense } from "react";
import { Route } from "react-router-dom";
import MovieList from "../MovieList/MovieList";

const About = React.lazy(() => import("../About/About"));
const FullMovie = React.lazy(() => import("../FullMovie/FullMovie"));

class MovieDB extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="MovieDB" style={{ marginTop: "-2rem" }}>
          <Route path="/" exact component={MovieList}></Route>
          <Route path="/genre/:genre" exact component={MovieList}></Route>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/about" exact render={props => <About {...props} />} />
            <Route
              path="/movies/:id"
              exact
              render={props => <FullMovie {...props} />}
            />
          </Suspense>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieDB;
