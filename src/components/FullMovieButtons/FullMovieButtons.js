import React, { Component } from "react";
import { IoIosClose } from "react-icons/io";
import Radium from "radium";

class FullMovieButtons extends Component {

  render() {

    const style = {
      position: "absolute",
      top: '0.2rem',
      right: '0.2rem',
      color: "#6f6f6f",
      ':hover': {
          color: '#c5c5c5'
      }
    };

    return (
      <div className="FullMovieButtons">
        <IoIosClose
        style={style}
          onClick={this.props.onRemove}
          size={40}
        />
      </div>
    );
  }
}

export default Radium(FullMovieButtons);