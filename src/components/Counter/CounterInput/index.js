import React, { Component } from "react";

class CounterInput extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: 0 };
  }
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };
  sendInput = () => {
    const { inputValue } = this.state;
    const { changeStep } = this.props;
    changeStep(Number(inputValue));
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
export default CounterInput;
