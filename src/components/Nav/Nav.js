import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

import './Nav.css';
import logo from './watchko-logo.png';

class Nav extends Component {
  render() {

    return (
      <div className='Nav navbar sticky-top'>
        <img src={logo} className="logo nav-item"/>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <NavLink className="nav-link active" to='/'>
            Movies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/about'>
            About
          </NavLink>
        </li>
      </ul>
      </div>
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
