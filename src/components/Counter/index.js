import React, { Component } from "react";
import CounterLogic from "./CounterLogic";
import Input from "./Input";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1, count: 0
    };
  }

  changeCurrentStep = (newStep) => {
    this.setState({ currentStep: newStep });
  }
  render() {
    const { currentStep, count } = this.state;
    return (
      <div>
        <p>Count: {count}</p>
        <p>Step: {currentStep}</p>
        <CounterLogic step={1} />
        <Input changeCurrentStep={this.changeCurrentStep}/>
      </div>
    );
  }
}

export default Counter;
