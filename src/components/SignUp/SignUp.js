import React, { Component } from "react";
import Input from "../Input/Input";

class SignUp extends Component {
  state = {
    loginForm: {
      firstName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "John"
        },
        value: ""
      },
      lastName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Smith"
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "john.smith@example.com"
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

    return (
      <form>
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

export default SignUp;
