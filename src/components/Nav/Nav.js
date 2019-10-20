import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './Nav.css';
import logo from './watchko-logo.png';

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
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Movies<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
  </div>
</nav >


      // <nav className='Nav navbar sticky-top navbar-expand-lg navbar-dark'>
      //   <img src={logo} className="logo navbar-brand"/>
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarResponsive"
      //     aria-controls="navbarResponsive"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span class="navbar-toggler-icon"></span>
      //   </button>
      //   <div class="collapse navbar-collapse" id="navbarResponsive">
      // <ul className="nav justify-content-end">
      //   <li className="nav-item">
      //     <NavLink className="nav-link active" to='/'>
      //       Movies
      //     </NavLink>
      //   </li>
      //   <li className="nav-item">
      //     <NavLink className="nav-link" to='/about'>
      //       About
      //     </NavLink>
      //   </li>
      // </ul>
      // </div>
      // </nav>
    );
  }
}

export default Nav;

//         <li className="nav-item">
//            <div onClick={this.props.onDisplayAbout}>About</div>
//         </li>

// const mapDispatchToProps= (dispatch) => {
//     return{
//         onDisplayAbout : () => dispatch({type: actionTypes.DISPLAY_ABOUT})
//     }
// }
// export default connect(null,mapDispatchToProps)(Nav);
