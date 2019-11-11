import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      //   <div className="Login">
      //     <div>Sign in</div>
      //     <div>Sign up</div>
      //     {/* //sign in comp */}
      //   </div>
      <Modal show={this.props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.displayEl.openLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClose: () => dispatch({ type: "TOGGLE_LOGIN" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
