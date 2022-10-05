import { Component } from "react";

class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      result: [],
      searchInput: "",
      dropdown: false,
    };
  }

  componentDidMount() {
    fetch("countries.json")
      .then((res) => res.json())
      .then((res) => this.setState({ countries: res, result: res }));
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      state: { countries, searchInput },
    } = this;
    if (searchInput.length >= 3) {
      if (prevState.searchInput !== this.state.searchInput) {
        this.setState({
          result: countries.filter((country) =>
            country.name.toLowerCase().includes(searchInput.toLowerCase())
          ),
        });
      }
    } else {
      if (prevState.searchInput !== this.state.searchInput) {
        this.setState({ result: countries });
      }
    }
  }

  handleInputChange = (event) => {
    this.setState({ searchInput: event.target.value });
  };
  handleFocus = (event) => {
    this.setState({ dropdown: true });
  };

  handleBlur = (event) => {
    this.setState({ dropdown: false });
  };

  render() {
    const {
      state: { searchInput, countries, result, dropdown },
    } = this;
    return (
      <div>
        <div className="search-container">
          <label htmlFor="searchInput"></label>

          <input
            onInput={this.handleInputChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value={searchInput}
            type="text"
            placeholder="Search.."
            id="searchInput"
          ></input>

          <div className={"countries-list" + (dropdown ? " active" : "")}>
            {result.map((country, i) => (
              <div key={country.code}>{country.name}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Dropdown;

// display: inline - block;
// display: none;
