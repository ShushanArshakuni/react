import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      max: Infinity,
      min: 0,
      step: 1,
    };
  }

  handleAdd = () => {
    this.setState({ count: this.state.count + this.state.step });
  };

  handleSub = () => {
    this.setState({ count: this.state.count - this.state.step });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  handleMaxValue = (event) => {
    this.setState({
      max: event.target.value,
    });
  };

  handleMinValue = (event) => {
    this.setState({
      min: event.target.value,
    });
  };

  handleStep = (event) => {
    this.setState({ step: Number(event.target.value) });
  };

  render() {
    const { count, max, min } = this.state;
    const { isDisabled } = this.props;
    return (
      <>
        <div className="container">
          <button className="button">Counter {count}</button>
          <div className="min-max">
            <label>
              Max
              <input
                type="number"
                min={min}
                onChange={this.handleMaxValue}
              ></input>
            </label>
            <label>
              Min
              <input
                type="number"
                max={max}
                onChange={this.handleMinValue}
              ></input>
            </label>
          </div>

          <button
            className="button"
            disabled={count >= max ? isDisabled : !isDisabled}
            onClick={this.handleAdd}
          >
            +
          </button>

          <button className="button" onClick={this.handleReset}>
            reset
          </button>

          <button
            className="button"
            disabled={count <= min ? isDisabled : !isDisabled}
            onClick={this.handleSub}
          >
            -
          </button>

          <label className="button">
            step
            <input type="number" onChange={this.handleStep}></input>
          </label>
        </div>
      </>
    );
  }
}

export default Counter;
