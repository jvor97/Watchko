import React, { Component } from "react";
import { connect } from "react-redux";

import CartItem from "../../components/CartItem/CartItem";

class Counter extends Component {
  //   generateId = () => {
  //     return (
  //       "_" +
  //       Math.random()
  //         .toString(36)
  //         .substr(2, 9)
  //     );
  //   };
  render() {
    // let cartList;

    let cartList = this.props.orderData.map(order => (
      <CartItem
        title={order.title}
        updatedPrice={order.updatedPrice}
        typeOfOrder={order.typeOfOrder}
        id={order.id}
        key={order.id}
      />
    ));
    return (
      <div>
        {cartList}
        <div>{this.props.finalPrice}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderData: state.order.orderData,
    finalPrice: state.order.finalPrice
  };
};

export default connect(mapStateToProps)(Counter);
