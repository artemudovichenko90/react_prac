import React, { Component } from "react";
import CounterLogic from "./CounterLogic";
import CounterInput from "./CounterInput";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1, counter: 0
    };
  }
  changeStep = (newStep) => {
    this.setState({ step: newStep });
  }
  addCounter = () => {
    this.setState(state => ({ counter: state.counter + state.step }));
  };
  subCounter = () => {
    this.setState(state => ({ counter: state.counter - state.step }));
  };
  render() {
    const { step, counter } = this.state;
    return (
      <div>
        <p>COUNTER: {counter}</p>
        <p>Step: {step}</p>
        <CounterLogic addCounter={this.addCounter} subCounter={this.subCounter} />
        <CounterInput changeStep={this.changeStep} />
      </div>
    );
  }
}

export default Counter;
