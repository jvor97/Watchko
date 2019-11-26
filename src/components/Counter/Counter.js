import React, { Component } from "react";
import { connect } from "react-redux";

import GeneralBtn from "../Buttons/GeneralBtn/GeneralBtn";

class Counter extends Component {
  state = {
    value: 1
  };

  handleDec = id => {
    this.props.onDecrement(id);
    return this.setState(prevState => {
      return {
        value: prevState.value - 1
      };
    });
  };
  handleInc = id => {
    this.props.onIncrement(id);
    return this.setState(prevState => {
      return {
        value: prevState.value + 1
      };
    });
  };
  render() {
    let id = this.props.id;
    console.log(this.props.id);
    return (
      <div>
        <GeneralBtn value="-" clicked={() => this.handleDec(id)} />
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
        <GeneralBtn value="+" clicked={() => this.handleInc(id)} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: id => dispatch({ type: "CART_INCREMENT", id: id }),
    onDecrement: id => dispatch({ type: "CART_DECREMENT", id: id })
  };
};

export default connect(null, mapDispatchToProps)(Counter);
