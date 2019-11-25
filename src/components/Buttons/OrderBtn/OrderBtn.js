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
            autocomplete="off"
            value="Rent"
            onClick={this.props.handleOrder}
          >
            Buy
          </button>
          <button
            className="loginBtn btn btn-primary"
            type="radio"
            autocomplete="off"
            value="Rent"
            onClick={this.props.handleOrder}
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
    handleOrder: () => dispatch({ type: "ORDER_COUNTER" })
  };
};

export default connect(null, mapDispatchToProps)(OrderBtn);
