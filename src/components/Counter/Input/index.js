import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: 0 };
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    });
  };
  sendInput = () => {
    const { inputValue } = this.state;
    const { changeCurrentStep } = this.props;
    changeCurrentStep(inputValue);
  };
  render() {
    const { inputValue } = this.state;

    return (
      <div>
        <input
          type="text"
          name="inputValue"
          value={inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.sendInput}>Send</button>
      </div>
    );
  }
}
export default Input;
