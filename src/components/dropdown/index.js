import { Component } from "react";

class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      countries: ["Argentina", "Armenia", "Aruba", "Barbados", "Bali"],
      searchInput: "",
    };
  }

  componentDidUpdate() {
    const {
      state: { countries, searchInput },
    } = this;
    if (searchInput.length > 3) {
      this.setState({
        countries: countries.filter((country) => country.includes(searchInput)),
      });
    }
  }

  handleInputChange = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const {
      state: { searchInput },
    } = this;
    return (
      <div>
        <label htmlFor="searchInput"></label>
        <input
          onChange={this.handleInputChange}
          value={searchInput}
          type="text"
          placeholder="Search.."
          id="searchInput"
        ></input>
        <a href="#Argentina">Argentina</a>
        <a href="#Armenia">Armenia</a>
        <a href="#Aruba">Aruba</a>
        <a href="#Barbados">Barbados</a>
        <a href="#Bali">Bali</a>
      </div>
    );
  }
}
export default Dropdown;
