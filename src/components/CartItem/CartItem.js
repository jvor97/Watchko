import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "../Counter/Counter";
import CloseBtn from "../Buttons/CloseBtn/CloseBtn";

class CartItem extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5>{this.props.title}</h5>
          <p>{this.props.typeOfOrder}</p>
          <Counter id={this.props.id} />
          <div>{this.props.updatedPrice}</div>
          <CloseBtn clicked={() => this.props.onDelete(this.props.id)} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => dispatch({ type: "DELETE_CARTITEM", id: id })
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
