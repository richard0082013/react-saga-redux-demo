import React, { Component } from "react";
import { flickrImages } from "../Api/api";

class Library extends Component {
  componentDidMount() {
    flickrImages("rain").then(images => console.log("image", images));
  }
  render() {
    return <div>Library</div>;
  }
}

export default Library;
