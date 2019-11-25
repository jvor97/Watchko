import React, { Component } from "react";
import {
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";
import { connect } from "react-redux";

import "./OrderBtn.css";

class OrderBtn extends Component {
  render() {
    return (
      <ButtonToolbar className="OrderBtn">
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <button
            className="loginBtn btn btn-primary"
            type="radio"
            autoComplete="off"
            value="buy"
            onClick={() => this.props.handleOrder(this.props.title, 9)}
          >
            Buy
          </button>
          <button
            className="loginBtn btn btn-primary"
            type="radio"
            autoComplete="off"
            value="rent"
            onClick={() => this.props.handleOrder(this.props.title, 7)}
          >
            Rent
          </button>
          {/* <ToggleButton
            value={2}
            onClick={this.props.handleOrder}
            className="loginBtn"
          >
            Rent
          </ToggleButton> */}
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleOrder: (title, price) =>
      dispatch({
        type: "REGISTER_ORDER",
        orderData: { title: title, price: price }
      })
  };
};

export default connect(null, mapDispatchToProps)(OrderBtn);
