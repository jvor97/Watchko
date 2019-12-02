import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import CartItem from "../../components/CartItem/CartItem";
import GeneralBtn from "../../components/Buttons/GeneralBtn/GeneralBtn";
import * as actions from "../../store/actions/index";
import "./CartList.css";
import emptyCart from "./emptyCart.png";

class Counter extends Component {
  render() {
    let cartList;

    if (this.props.orderData !== null) {
      cartList = (
        <table className="CartList">
          <tbody>
            {this.props.orderData.map(order => (
              <CartItem
                title={order.title}
                updatedPrice={order.updatedPrice}
                typeOfOrder={order.typeOfOrder}
                id={order.id}
                key={order.id}
                numOfOrders={order.numOfOrders}
              />
            ))}
          </tbody>
          <tbody>
            <tr style={{ display: "flex" }}>
              <td className="card-body"></td>
              <td className="card-body"></td>
              <td className="card-body"></td>
              <td className="card-body">
                <div>{this.props.finalPrice} $</div>
              </td>
              <td className="card-body">
                <GeneralBtn value="Checkout" clicked={this.props.onCheckout} />
              </td>
            </tr>
          </tbody>
        </table>
      );
    }

    if (this.props.orderData === null) {
      cartList = (
        <>
          <div className="CartList">Your cart is empty</div>
          <img src={emptyCart}></img>
        </>
      );
    }

    if (this.props.loading) {
      cartList = <Spinner animation="border" className="CartList" />;
    }

    if (this.props.messageSent) {
      cartList = (
        <>
          <div className="CartList">Your order has been sent</div>
          <IoIosCheckmarkCircleOutline size={300} color="#918d2c" />
        </>
      );
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
