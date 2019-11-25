import React, { Component, Suspense } from "react";
import { Route } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import Logout from "../../components/Login/Logout";
import CartList from "../CartList/CartList";

const About = React.lazy(() => import("../About/About"));
const FullMovie = React.lazy(() => import("../FullMovie/FullMovie"));

class MovieDB extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="MovieDB" style={{ marginTop: "-2rem" }}>
          <Route path="/" exact component={MovieList}></Route>
          <Route path="/genre/:genre" exact component={MovieList}></Route>
          <Route path="/logout" component={Logout}></Route>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/about" exact render={() => <About />} />
            <Route path="/cart" exact render={() => <CartList />} />
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
