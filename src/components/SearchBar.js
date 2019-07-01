import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <form onSubmit={this.onFormSubmit}>
              <label htmlFor="searchbar">Image Search</label>
              <input
                type="text"
                name="searchbar"
                id="searchbar"
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
