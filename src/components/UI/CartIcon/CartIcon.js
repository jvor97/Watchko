import React, { Component } from "react";

import { IoIosCart } from "react-icons/io";

class CartIcon extends Component {
  render() {
    const style = {
      position: "absolute",
      backgroundColor: "#847f12"
    };
    return (
      <div>
        <IoIosCart />
        <span class="badge badge-pill" style={style}>
          1
        </span>
      </div>
    );
  }
}

export default CartIcon;
