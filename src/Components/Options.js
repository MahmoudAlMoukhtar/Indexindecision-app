import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <div className="widget_header">
      <h3 className="widget_header__title">Your Options</h3>
      <button onClick={props.funcDeleteOptions} className="button button--link">
        Remove All
      </button>
    </div>
    {props.optionsData.length === 0 && (
      <p className="widget__message">please add your options to get Started</p>
    )}
    <ol className="container">
      {props.optionsData.map((option) => (
        <Option
          key={option}
          optionText={option}
          handelDeleteOption={props.handelDeleteOption}
        />
      ))}
    </ol>
  </div>
);

export default Options;
