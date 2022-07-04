import React, { Component } from "react";

class CounterLogic extends Component {
  constructor(props) {
    super(props);
    this.state = { statusButton: true };
  }
  changeButton = () => {
    this.setState(state => ({ statusButton: !state.statusButton }));
  };
  render() {
    const { statusButton } = this.state;
    const { addCounter, subCounter } = this.props;
    return (
      <article>
        <button onClick={statusButton ? addCounter : subCounter}>
          {statusButton ? "addition" : "subtraction"}
        </button>
        <button onClick={this.changeButton}>Change</button>
      </article>
    );
  }
}
export default CounterLogic;
