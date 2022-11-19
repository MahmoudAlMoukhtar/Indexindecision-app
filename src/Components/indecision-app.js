import React from "react";
import FormAddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";
class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  componentDidMount() {
    try {
      const jsonOptions = localStorage.getItem("options");
      const options = JSON.parse(jsonOptions);
      if (options) {
        this.setState(() => {
          return {
            options: options,
          };
        });
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const jsonOptions = JSON.stringify(this.state.options);
      localStorage.setItem("options", jsonOptions);
    }
  }

  handelDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handelDeleteOption = (optionToRemove) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter(
          (option) => optionToRemove !== option
        ),
      };
    });
  };

  handelPick = () => {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomIndex];
    this.setState(() => {
      return {
        selectedOption: option,
      };
    });
  };

  handelAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exists";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
    document.querySelector("form").style.border = "none";
  };

  handelClearSelected = () => {
    this.setState(() => {
      return {
        selectedOption: undefined,
      };
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            optionsData={this.state.options}
            handelPick={this.handelPick}
          />
          <div className="widget__options__list ">
            <Options
              optionsData={this.state.options}
              funcDeleteOptions={this.handelDeleteOptions}
              handelDeleteOption={this.handelDeleteOption}
            />
            <FormAddOption
              optionsData={this.state.options}
              handelAddOption={this.handelAddOption}
            />
          </div>
        </div>
        <OptionModal
          stateSelectedOption={this.state.selectedOption}
          handelClearSelected={this.handelClearSelected}
        />
      </div>
    );
  }
}

export default IndecisionApp;
