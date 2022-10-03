import { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      unmountCount: 0,
    };
  }

  hideCard = () => {
    this.setState({ hide: !this.state.hide });
  };

  componentWillUnmount() {
    this.setState({ unmountCount: this.state.unmountCount + 1 });
  }

  render() {
    const { avatar_URL, id } = this.props;
    return (
      <div className="card">
        {!this.state.hide && (
          <>
            <h2 className="number"> {id}</h2>
            <img className="image" src={avatar_URL} alt="" />
          </>
        )}
        <button
          className={!this.state.hide ? "close-button" : "show-button"}
          onClick={this.hideCard}
        >
          {!this.state.hide ? "X" : "Show"}
        </button>
      </div>
    );
  }
}

export default Card;
