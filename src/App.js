import { Component } from "react";
import "./App.css";
import Counter from "./components/counter";
// import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDisabled: true,
    };
  }
  render() {
    const { isDisabled } = this.state;

    return (
      <>
        <Counter isDisabled={isDisabled} initial={0} />
      </>
    );
  }
}

export default App;
