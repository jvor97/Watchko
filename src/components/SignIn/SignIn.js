import React, { Component } from "react";
import Input from "../Input/Input";
import "./SignIn.css";

class SignIn extends Component {
  state = {
    loginForm: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "User email"
        },
        value: ""
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: ""
      }
    }
  };

  onChangeHandler = (e, id) => {
    let updatedLoginForm = { ...this.state.loginForm };
    let updatedFormElement = { ...updatedLoginForm[id] };
    updatedFormElement.value = e.target.value;
    updatedLoginForm[id] = updatedFormElement;
    this.setState({
      loginForm: updatedLoginForm
    });
  };

  render() {
    const formElementsArray = [];
    for (let i in this.state.loginForm) {
      formElementsArray.push({
        id: i,
        config: this.state.loginForm[i]
      });
    }

    const style = {
      width: "47%",
      display: "inline-block"
    };
    return (
      <form className='SignIn'>
        {formElementsArray.map(input => (
          <Input
            key={input.id}
            elementType={input.config.elementType}
            value={input.config.value}
            config={input.config.elementConfig}
            onChange={event => this.onChangeHandler(event, input.id)}
          />
        ))}
      </form>
    );
  }
}

export default SignIn;
