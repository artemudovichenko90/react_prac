import React, { Component } from "react";
import Counter from "./components/Counter";
import Styles from './App.css'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;
