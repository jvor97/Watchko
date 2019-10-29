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
        value: ""
      },
      email: {
        elementType: "input",
        configuration: {
          type: "email",
          placeholder: "john.smith@example.com"
        },
        value: ""
      },
      textarea: {
        elementType: "textarea",
        configuration: {
          type: "text",
          placeholder: "..."
        },
        value: ""
      },
      select: {
        elementType: "select",
        value: "",
        configuration: {
          options: [
            { value: "shipping", displayValue: "Shipping" },
            { value: "tech problems", displayValue: "Technical problems" }
          ]
        }
      }
    }
  };

  changeHandler = (event, id) => {
    const updatedForm = { ...this.state.contactForm };
    const updatedFormEl = { ...updatedForm[id] };

    updatedFormEl.value = event.target.value;
    updatedForm[id] = updatedFormEl;
    this.setState({
      contactForm: updatedForm
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
              onChange={event => this.changeHandler(event, formElement.id)}
            ></Input>
          ))}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
