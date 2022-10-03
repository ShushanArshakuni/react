import { Component } from "react";
import Card from "../card";
import ReportSection from "../reportSection";

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ cards: res }));
  }

  render() {
    const { cards } = this.state;
    console.log(cards);
    return (
      <div className="container">
        <div className="cards-section">
          <div className="cards-container">
            {cards.map((card, i) => (
              <Card key={i} avatar_URL={card.avatar_URL} id={card.id} />
            ))}
          </div>
        </div>
        <div className="report-section">
          <ReportSection />
        </div>
      </div>
    );
  }
}

export default Wrapper;
