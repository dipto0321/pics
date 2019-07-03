import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import "./app.scss";
export default class App extends Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    const response = await unsplash.get("search/photos", {
      params: {
        query: term
      }
    });

    this.setState({
      images: response.data.results
    });
  };
  render() {
    return (
      <div className="ui container top-margin">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <p>Found: {this.state.images.length} images</p>
      </div>
    );
  }
}
