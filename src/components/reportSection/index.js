import { Component } from "react";

class ReportSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div className="reportSection">
        <h2>Report</h2>
        Card number {this.props.id} unmounted {this.unmountCount} times
        <button>report</button>
      </div>
    );
  }
}
export default ReportSection;
