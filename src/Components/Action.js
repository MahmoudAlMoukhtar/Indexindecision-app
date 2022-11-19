import React from "react";

const Action = (props) => (
  <button
    className="big__button"
    disabled={!props.hasOptions}
    onClick={props.handelPick}
  >
    What should I do
  </button>
);

export default Action;
