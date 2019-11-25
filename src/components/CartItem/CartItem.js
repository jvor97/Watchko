import React, { Component } from "react";

class CartItem extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
            <p>Movie name</p>
            <div>counter</div>
            <div>price</div>
            <button>delete</button>
        </div>
      </div>
    );
  }
}

export default CartItem;
