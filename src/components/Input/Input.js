/* eslint-disable default-case */
import React from "react";

const input = props => {
  let inputType;
  switch (props.elementType) {
    case "input":
      inputType = (
        <input
          value={props.value}
          type={props.config.type}
          placeholder={props.config.placeholder}
          onChange={props.onChange}
        ></input>
      );
      break;
    case "textarea":
      inputType = (
        <textarea
          value={props.value}
          type={props.config.type}
          placeholder={props.config.placeholder}
          onChange={props.onChange}
        ></textarea>
      );
      break;
    case "select":
      inputType = (
        <select value={props.value} onChange={props.onChange}>
          {props.config.options.map(option => (
            <option value={option.value} key={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
  }

  return (
    <div className="form-group">
      <label>{props.label}</label>
      {inputType}
    </div>
  );
};

export default input;
