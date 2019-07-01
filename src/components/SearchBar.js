import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <form action="">
              <label htmlFor="searchbar">Image Search</label>
              <input type="text" name="searchbar" id="searchbar" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
