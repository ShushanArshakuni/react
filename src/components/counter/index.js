import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initial || 0,
      max: Infinity,
      min: 0,
      step: 1,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSub = this.handleSub.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleMaxValue = this.handleMaxValue.bind(this);
    this.handleMinValue = this.handleMinValue.bind(this);
  }

  handleAdd() {
    this.setState({ count: this.state.count + this.state.step });
  }

  handleSub() {
    this.setState({ count: this.state.count - this.state.step });
  }

  handleReset() {
    this.setState({ count: 0 });
  }

  handleMaxValue(event) {
    this.setState({
      max: event.target.value,
    });
  }

  handleMinValue(event) {
    this.setState({
      min: event.target.value,
    });
  }

  render() {
    const { count, max, min } = this.state;
    const { isDisabled } = this.props;
    return (
      <>
        <div>
          <h1>Counter {count}</h1>

          <div>
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
        </div>
      </>
    );
  }
}

export default Counter;
