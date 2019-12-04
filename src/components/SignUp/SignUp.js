import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../Input/Input";
import GeneralBtn from "../Buttons/GeneralBtn/GeneralBtn";
import "./SignUp.css";
import * as actions from "../../store/actions/index";
import { formChangeHandler } from "../../shared/utility";

class SignUp extends Component {
  state = {
    form: {
      firstName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "John"
        },
        validation: {
          require: true,
          minLength: 0,
          number: false,
          specChar: false
        },
        valid: false,
        touched: false,
        value: "",
        label: "First Name"
      },
      lastName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Smith"
        },
        validation: {
          require: true,
          minLength: 0,
          number: false,
          specChar: false
        },
        valid: false,
        touched: false,
        value: "",
        label: "Last Name"
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "john.smith@example.com"
        },
        validation: {
          require: true,
          minLength: 5,
          number: false,
          specChar: true
        },
        valid: false,
        touched: false,
        value: "",
        label: "Email"
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        validation: {
          require: true,
          minLength: 5,
          number: true,
          specChar: true
        },
        valid: false,
        touched: false,
        value: "",
        label: "Password"
      }
    },
    valid: true
  };

  onChangeHandler = (e, id) => {
    let newState = formChangeHandler(e, id, this.state);
    this.setState({
      form: newState.updatedForm,
      valid: newState.validForm
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // let data = {};
    // for (const formEl in this.state.loginForm) {
    //   data[formEl] = this.state.loginForm[formEl].value;
    // }

    this.props.onSignUp(
      this.state.form.email.value,
      this.state.form.password.value,
      "signUp"
    );
  };

  render() {
    const formElementsArray = [];
    for (let i in this.state.form) {
      formElementsArray.push({
        id: i,
        config: this.state.form[i]
      });
    }

    return (
      <form className="SignUp" onSubmit={this.handleSubmit}>
        {formElementsArray.map(input => (
          <Input
            key={input.id}
            elementType={input.config.elementType}
            value={input.config.value}
            config={input.config.elementConfig}
            invalid={!input.config.valid}
            touched={input.config.touched}
            label={input.config.label}
            onChange={event => this.onChangeHandler(event, input.id)}
          />
        ))}
        <GeneralBtn
          type="submit"
          id="signingBtn"
          style={{ width: "100%", fontSize: "1.25rem" }}
          clicked={this.handleSubmit}
          value="Sign Up"
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: (email, password, loginMethod) =>
      dispatch(actions.login(email, password, loginMethod))
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
