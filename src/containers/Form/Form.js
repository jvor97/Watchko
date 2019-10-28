import React, { Component } from "react";
import Input from '../../components/Input/Input';

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
        <form>
          {contactFormElements.map(formElement =>
          <Input
            value={formElement.config.value}
            elementType={formElement.config.elementType}
            key={formElement.id}
            config={formElement.config.configuration}
          ></Input>
          )}
        </form>
      </div>
    );
  }
}

export default Form;
