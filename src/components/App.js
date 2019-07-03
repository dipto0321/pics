import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import "./app.scss";
export default class App extends Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      },
      headers: {
        Authorization:
          "Client-ID bb4a5602f82d0ce92894bff097bdaf2046fb37348f1650d9d86ece5df7ad4bbb"
      }
    });
  }
  render() {
    return (
      <div className="ui container top-margin">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
