import React, { Component } from "react";
import "./styles.css";

class SearchBar extends Component {
  static defaultProps = {
    handleKeyword: () => console.log("handleKeyword not defined!")
  };

  state = {
    keywords: ""
  };

  _handleOnChange = e => {
    const { keywords } = this.state;
    const { handleKeyword } = this.props;

    this.setState({
      keywords: e.target.value
    });
    handleKeyword(keywords);
    console.log("keywords in searchbar: " + keywords);
  };

  render() {
    const { keywords } = this.state;
    return (
      <div className="SearchBar__container">
        <input
          onChange={this._handleOnChange}
          placeholder="Input name for searching..."
          value={keywords}
          className="SearchBar__container__input"
        />
      </div>
    );
  }
}

export default SearchBar;
