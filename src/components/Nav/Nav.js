import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link active" to='/'>
            Movies
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>
            About
          </Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
