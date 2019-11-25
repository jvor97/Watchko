import React, { Component } from "react";
import { connect } from "react-redux";

import CartItem from "../../components/CartItem/CartItem";

class Counter extends Component {
  render() {
    // let cartList;
    let cartList = this.props.orderData.map(order => (
      <CartItem title={order.title} price={order.price} />
    ));
    return <div>{cartList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    orderData: state.order.orderData
  };
};

export default connect(mapStateToProps)(Counter);
