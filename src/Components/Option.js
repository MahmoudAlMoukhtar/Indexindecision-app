import React from "react";

const Option = (props) => (
  <div className="option">
    <li>{props.optionText}</li>
    <button
      className="button button--link button-remove"
      onClick={() => {
        props.handelDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;
