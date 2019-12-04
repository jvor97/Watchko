import React, { Component } from "react";
import { connect } from "react-redux";
import { validateValue } from "../../shared/utility";

import Input from "../Input/Input";
import * as actions from "../../store/actions/index";
import GeneralBtn from "../Buttons/GeneralBtn/GeneralBtn";

class SignIn extends Component {
  state = {
    loginForm: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "User email"
        },
        value: "",
        label: "Email"
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        label: "Password"
      }
    }
  };

  onChangeHandler = (e, id) => {
    let updatedForm = { ...this.state.loginForm };
    let updatedFormEl = { ...updatedForm[id] };
    updatedFormEl.value = e.target.value;

    updatedForm[id] = updatedFormEl;

    this.setState({
      loginForm: updatedForm
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSignIn(
      this.state.loginForm.email.value,
      this.state.loginForm.password.value,
      "signIn"
    );
  };

  render() {
    const formElementsArray = [];
    for (let i in this.state.loginForm) {
      formElementsArray.push({
        id: i,
        config: this.state.loginForm[i]
      });
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {formElementsArray.map(input => (
          <Input
            key={input.id}
            elementType={input.config.elementType}
            value={input.config.value}
            config={input.config.elementConfig}
            label={input.config.label}
            onChange={event => this.onChangeHandler(event, input.id)}
          />
        ))}
        <GeneralBtn
          type="submit"
          id="signingBtn"
          style={{ width: "100%", fontSize: "1.25rem" }}
          clicked={this.handleSubmit}
          value="Sign In"
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: (email, password, loginMethod) =>
      dispatch(actions.login(email, password, loginMethod))
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
