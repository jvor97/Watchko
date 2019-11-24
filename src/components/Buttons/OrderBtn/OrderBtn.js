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
          <ToggleButton
            value={1}
            onClick={this.props.handleOrder}
            className="loginBtn"
          >
            Buy
          </ToggleButton>
          <ToggleButton
            value={2}
            onClick={this.props.handleOrder}
            className="loginBtn"
          >
            Rent
          </ToggleButton>
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

export default connect(
  null,
  mapDispatchToProps
)(OrderBtn);
