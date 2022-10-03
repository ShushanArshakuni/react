import { Component } from "react";

class ReportSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentWillUnmount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { count } = this.state;
    return (
      <div className="reportSection">
        <h1>Report</h1>
        Card number {this.props.id} unmounted {count} times
        <button>report</button>
      </div>
    );
  }
}
export default ReportSection;
