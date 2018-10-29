import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          content="Home"
          onClick={this.handleItemClick}
          href="/home"
        />

        <Menu.Item
          name="library"
          active={activeItem === "library"}
          content="Library"
          onClick={this.handleItemClick}
          href="/library"
        />
      </Menu>
    );
  }
}
