import React, { Component } from "react";
import { connect } from "react-redux";

import GeneralBtn from "../Buttons/GeneralBtn/GeneralBtn";

class Counter extends Component {
  state = {
    value: 1
  };

  handleDec = () => {
    this.props.onDecrement();
    return this.setState(prevState => {
      return {
        value: prevState.value - 1
      };
    });
  };
  handleInc = () => {
    this.props.onIncrement();
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
          readOnly
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

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: "CART_INCREMENT" }),
    onDecrement: () => dispatch({ type: "CART_DECREMENT" })
  };
};

export default connect(null, mapDispatchToProps)(Counter);
