import { Component } from "react";
import Card from "../card";
import ReportSection from "../reportSection";

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      reports: [],
    };
  }

  componentDidMount() {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ cards: res }));
  }

  getReport = () => {
    this.setState({ cards: [{ name: "gago" }] });
  };

  render() {
    const { cards } = this.state;
    return (
      <>
        <div className="cards-section">
          <div className="cards-container">
            {cards.map((card, i) => (
              <Card key={i} avatarUrl={card.avatarUrl} id={card.id} />
            ))}
          </div>
        </div>
        <button onClick={this.getReport} className="report-button">
          get report
        </button>
        <div>
          <ReportSection data={this.state.reports} />
        </div>
      </>
    );
  }
}

export default Wrapper;
