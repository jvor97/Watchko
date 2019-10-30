/* eslint-disable default-case */
import React from "react";
import "./Input.css";

const input = props => {
  let classes = [".input"];
  if (props.invalid) {
    classes.push("invalid");
  }

  let inputType;
  switch (props.elementType) {
    case "input":
      inputType = (
        <input
          className={classes.join(" ")}
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
          className={classes.join(" ")}
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
