import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Link to="/home">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            content="Home"
            onClick={this.handleItemClick}
          />
        </Link>

        <Link to="/library">
          <Menu.Item
            name="library"
            active={activeItem === "library"}
            content="Library"
            onClick={this.handleItemClick}
            href="/library"
          />
        </Link>
      </Menu>
    );
  }
}
