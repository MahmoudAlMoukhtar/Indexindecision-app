import React from "react";
class FormAddOption extends React.Component {
  state = {
    error: undefined,
  };

  handelAddOption = (e) => {
    e.preventDefault();

    const option = e.target.option.value.trim();
    const error = this.props.handelAddOption(option);

    this.setState(() => ({ error: error }));
    if (!error) {
      e.target.option.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form
          onSubmit={this.handelAddOption}
          className="add-option widget_form"
        >
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
export default FormAddOption;
