import React, { Component } from "react";

import GeneralBtn from "../Buttons/GeneralBtn/GeneralBtn";

class Counter extends Component {
  state = {
    value: 1
  };

  handleDec = () => {
    return this.setState(prevState => {
      return {
        value: prevState.value - 1
      };
    });
  };
  handleInc = () => {
    return this.setState(prevState => {
      return {
        value: prevState.value + 1
      };
    });
  };
  render() {
    return (
      <div>
        <GeneralBtn value="-" clicked={this.handleDec} />
        <input
          value={this.state.value}
          style={{
            width: "2rem",
            borderRadius: ".25rem",
            margin: "0 .25rem",
            padding: ".5rem"
          }}
        ></input>
        <GeneralBtn value="+" clicked={this.handleInc} />
      </div>
    );
  }
}

export default Counter;
