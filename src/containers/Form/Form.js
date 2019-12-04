import React, { Component } from "react";
import Input from "../../components/Input/Input";
import GeneralBtn from "../../components/Buttons/GeneralBtn/GeneralBtn";
import axios from "axios";
import { formChangeHandler } from "../../shared/utility";

class Form extends Component {
  state = {
    form: {
      name: {
        elementType: "input",
        configuration: {
          type: "text",
          placeholder: "John Smith"
        },
        value: "",
        validation: {
          require: true,
          minLength: 5,
          number: false,
          specChar: false
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        configuration: {
          type: "email",
          placeholder: "john.smith@example.com"
        },
        value: "",
        validation: {
          require: true,
          minLength: 5,
          number: false,
          specChar: true
        },
        valid: false,
        touched: false
      },
      textarea: {
        elementType: "textarea",
        configuration: {
          type: "text",
          placeholder: "..."
        },
        value: "",
        validation: {
          require: true,
          minLength: 10,
          number: false,
          specChar: false
        },
        valid: false,
        touched: false
      },
      select: {
        elementType: "select",
        value: "shipping",
        configuration: {
          options: [
            { value: "shipping", displayValue: "Shipping" },
            { value: "tech problems", displayValue: "Technical problems" }
          ]
        },
        valid: true,
        validation: {}
      }
    },
    valid: true
  };

  changeHandler = (event, id) => {
    let newState = formChangeHandler(event, id, this.state);
    this.setState({
      form: newState.updatedForm,
      valid: newState.validForm
    });
  };

  contactFormHandler = event => {
    event.preventDefault();
    let formData = {};
    for (const formElement in this.state.form) {
      // formData[formElement] = formElement.value;
      formData[formElement] = this.state.form[formElement].value;
    }

    //   ("http://localhost:4000/about/add"
    axios
      .post("https://watchko-94928.firebaseio.com/contactData.json", formData)
      .then(response => {
        console.log(response.config.data);
        // this.props.history.push("/");
      });
  };

  render() {
    let contactFormElements = [];
    for (const key in this.state.form) {
      contactFormElements.push({
        id: key,
        config: this.state.form[key]
      });
    }

    return (
      <div>
        <form
          onSubmit={event => this.contactFormHandler(event)}
          style={{ width: "100%" }}
        >
          {contactFormElements.map(formElement => (
            <Input
              value={formElement.config.value}
              elementType={formElement.config.elementType}
              key={formElement.id}
              config={formElement.config.configuration}
              invalid={!formElement.config.valid}
              touched={formElement.config.touched}
              onChange={event => this.changeHandler(event, formElement.id)}
            ></Input>
          ))}
          <GeneralBtn disabled={!this.state.valid} value="Submit"></GeneralBtn>
        </form>
      </div>
    );
  }
}

export default Form;
