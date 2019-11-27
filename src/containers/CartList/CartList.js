import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";

import CartItem from "../../components/CartItem/CartItem";
import GeneralBtn from "../../components/Buttons/GeneralBtn/GeneralBtn";
import * as actions from "../../store/actions/index";

class Counter extends Component {
  render() {
    // let cartList;

    let cartList = (
      <>
        <div>
          {this.props.orderData.map(order => (
            <CartItem
              title={order.title}
              updatedPrice={order.updatedPrice}
              typeOfOrder={order.typeOfOrder}
              id={order.id}
              key={order.id}
            />
          ))}
        </div>
        <div>{this.props.finalPrice}</div>
        <GeneralBtn value="Checkout" clicked={this.props.onCheckout} />
      </>
    );

    if (this.props.orderData.length == 0) {
      cartList = <div>Your cart is empty</div>;
    }

    if (this.props.loading) {
      cartList = <Spinner animation="border" />;
    }

    if (this.props.messageSent) {
      cartList = <div>Your order has been sent</div>;
    }
    return (
      <div>
        {cartList}
        {/* <div>{this.props.finalPrice}</div>
        <GeneralBtn value="Checkout" clicked={this.props.onCheckout} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderData: state.order.orderData,
    finalPrice: state.order.finalPrice,
    loading: state.order.loading,
    messageSent: state.order.messageSent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckout: () => dispatch(actions.handleCheckout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
