import React from "react";
import List from "../../Global/List/List";
import ListItem from "../../Global/ListItem/ListItem";
import "./Nav.scss";

const Nav = () => (
  <nav className="Nav">
    <List>
      <ListItem value="About" link="#" />
      <ListItem value="Portfolio" link="#" />
      <ListItem value="Contact" link="#" />
    </List>
  </nav>
);

export default Nav;
