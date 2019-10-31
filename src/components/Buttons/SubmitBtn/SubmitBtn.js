import React from "react";

import "./SubmitBtn.css";

const SubmitBtn = props => {
  return (
    <button className="btn btn-outline" disabled={props.disabled}>
      Submit
    </button>
  );
};

export default SubmitBtn;
