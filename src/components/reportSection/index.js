import { Component } from "react";

class ReportSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log("this.props.reports");
    console.log(this.props.reports);
    const { count } = this.state;
    return (
      <div className="report-section">
        <h2>Report</h2>
        Card number {this.props.id} unmounted {this.unmountCount} times
      </div>
    );
  }
}
export default ReportSection;
