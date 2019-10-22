import React, { Component } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Radium from "radium";

class FullMovieButtons extends Component {

  render() {

    const style = {
      position: "absolute",
      bottom: '.3rem',
      left: '0.4rem',
      color: "#6f6f6f",
      ":hover": {
          color: "#c5c5c5"
      }
    };

    return (
      <div className="FullMovieButtons">
        <IoIosArrowRoundBack
        style={style}
          onClick={this.props.onGoBack}
          size={50}
        />
      </div>
    );
  }
}

export default Radium(FullMovieButtons);