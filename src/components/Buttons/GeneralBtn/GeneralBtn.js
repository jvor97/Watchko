import React from "react";

import "./GeneralBtn.css";

const SubmitBtn = props => {
  return (
    <button
      className="btn btn-outline"
      disabled={props.disabled}
      style={props.style}
    >
      {props.value}
    </button>
  );
};

export default SubmitBtn;
