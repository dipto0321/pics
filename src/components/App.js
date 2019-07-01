import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "./app.scss";
export default class App extends Component {
  onSearchSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container top-margin">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
