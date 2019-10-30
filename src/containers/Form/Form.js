import React, { Component } from "react";
import Input from "../../components/Input/Input";
import axios from "axios";

class Form extends Component {
  state = {
    contactForm: {
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
          specChar: false
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

  validateValue = (rule, value) => {
    let isValid = true;
    if (rule.require && isValid) {
      value.trim() !== "" ? (isValid = true) : (isValid = false);
    }
    if (rule.minLength && isValid) {
      value.length >= rule.minLength ? (isValid = true) : (isValid = false);
    }
    if (rule.number && isValid) {
      const patt = /[0-9]/g;
      patt.test(value) ? (isValid = true) : (isValid = false);
    }
    if (rule.specChar && isValid) {
      const patt = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      patt.test(value) ? (isValid = true) : (isValid = false);
    }
    return isValid;
  };

  changeHandler = (event, id) => {
    const updatedForm = { ...this.state.contactForm };
    const updatedFormEl = { ...updatedForm[id] };

    updatedFormEl.value = event.target.value;
    updatedFormEl.valid = this.validateValue(
      updatedFormEl.validation,
      updatedFormEl.value
    );
    updatedFormEl.touched = true;

    let validForm = true;
    for (let formElement in updatedForm) {
      // if (updatedForm[formElement].valid && validForm) {
      //   validForm = true;
      // }
      //nefunguje preco ?
      validForm = updatedForm[formElement].valid && validForm;
    }

    updatedForm[id] = updatedFormEl;
    console.log(updatedFormEl);
    this.setState({
      contactForm: updatedForm,
      valid: validForm
    });
  };

  contactFormHandler = event => {
    event.preventDefault();
    let formData = {};
    for (const formElement in this.state.contactForm) {
      // formData[formElement] = formElement.value;
      formData[formElement] = this.state.contactForm[formElement].value;
    }
    axios
      .post("https://jsonplaceholder.typicode.com/posts", formData)
      .then(response => {
        console.log(response);
        // this.props.history.push("/");
      });
  };

  render() {
    let contactFormElements = [];
    for (const key in this.state.contactForm) {
      contactFormElements.push({
        id: key,
        config: this.state.contactForm[key]
      });
    }

    return (
      <div>
        <form onSubmit={event => this.contactFormHandler(event)}>
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
          <button disabled={!this.state.valid}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
