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

  incrementNum = () => {
    this.setState((state, props) => ({ count: state.count + state.currentStep }));
  };
  decrementNum = () => {
    this.setState((state, props) => ({ count: state.count - state.currentStep }));
  };

  render() {
    const { currentStep, count } = this.state;
    return (
      <div>
        <p>Count: {count}</p>
        <p>Step: {currentStep}</p>
        <CounterLogic incrementNum={this.incrementNum} decrementNum={this.decrementNum} />
        <Input changeCurrentStep={this.changeCurrentStep} />
      </div>
    );
  }
}

export default Counter;
