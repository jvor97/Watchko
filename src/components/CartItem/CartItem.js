import React, { Component } from "react";
import Counter from "../Counter/Counter";

class CartItem extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5>{this.props.title}</h5>
          <p>{this.props.typeOfOrder}</p>
          <Counter/>
          <div>{this.props.price}</div>
          <button>delete</button>
        </div>
      </div>
    );
  }
}

export default CartItem;
