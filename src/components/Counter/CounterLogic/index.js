import React, { Component } from "react";
import Input from "../Input";

class CounterLogic extends Component {
  constructor(props) {
    super(props);
    this.state = { statusButton: true };
  }

  changeButton = () => {
    this.setState({
      statusbar: (this.state.statusButton = !this.state.statusButton),
    });
  };
  render() {
    const { statusButton } = this.state;
    const { incrementNum, decrementNum } = this.props;
    return (
      <article>
        <button onClick={statusButton ? incrementNum : decrementNum}>
          {statusButton ? "Increment" : "Decrement"}
        </button>
        <button onClick={this.changeButton}>Change</button>
      </article>
    );
  }
}

export default CounterLogic;
