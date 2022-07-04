import React, { Component } from "react";
import Input from "../Input";

class CounterLogic extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, statusButton: true, step: 0 };
  }
  incrementNum = () => {
    this.setState((state, props) => ({ count: state.count + props.step }));
  };
  decrementNum = () => {
    this.setState((state, props) => ({ count: state.count - props.step }));
  };
  changeButton = () => {
    this.setState({
      statusbar: (this.state.statusButton = !this.state.statusButton),
    });
  };
  render() {
    const { count, statusButton, inputValue } = this.state;
    return (
      <article>
        <button onClick={statusButton ? this.incrementNum : this.decrementNum}>
          {statusButton ? "Increment" : "Decrement"}
        </button>
        <button onClick={this.changeButton}>Change</button>
      </article>
    );
  }
}

export default CounterLogic;
