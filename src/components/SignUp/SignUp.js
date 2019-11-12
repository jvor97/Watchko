import React, { Component } from "react";
import Input from "../Input/Input";
import "./SignUp.css";

class SignUp extends Component {
  state = {
    loginForm: {
      firstName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "John"
        },
        value: "",
        label: "First Name"
      },
      lastName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Smith"
        },
        value: "",
        label: "Last Name"
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "john.smith@example.com"
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

    return (
      <form className="SignUp">
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
      </form>
    );
  }
}

export default SignUp;
