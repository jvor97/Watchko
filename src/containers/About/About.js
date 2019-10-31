import React, { Component } from "react";
// import {connect} from 'react-redux';
import "./About.css";
import Form from "../Form/Form";

class About extends Component {
  render() {
    console.log(this.props.display);

    // let about;
    // if (this.props.display) {
    //     about = (
    //     <div className='aboutText'>
    //         'Looking for a movie to watch tonight ? You are on the right place !
    //         Choose your movie, read the info and then just enjoy your unlimited
    //         movie ..'
    //     </div>)
    // }

    return (
      <section className="About">
        <div className="half-page-div">
          <div id="side-text">About Watchko</div>
          <div className="half-page-text aboutText">
            <span style={{ fontSize: "2.7vw", color: "#cacaca" }}>
              Can't decide what movie to watch tonight ?
            </span>{" "}
            <br />
            <span style={{ fontSize: "2vw", color: "#bdbdbd" }}>
              You are on the right place !
            </span>{" "}
            <br />
            Watchko offers a huge movie database with all needed information to
            make your decision easier. Are you in the mood for a good comedy ?
            Find it in our genre list! No specific genre mood ? No problem, we
            will display you currently most popular movies !
          </div>
        </div>
        <div className="half-page-div form-div">
          <div id="side-text">Contact us</div>
          <div className='half-page-text contact-form'>
          <Form></Form>
          </div>
        </div>
      </section>
    );
  }
}

// const mapStateToProps = state => {
//     return {
//     display: state.displayEl.displayAbout
//     }
// }

export default About;
