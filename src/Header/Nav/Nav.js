import React from "react";
import List from "../../ubiquitous/components/List/List";
import ListItem from "../../ubiquitous/components/ListItem/ListItem";
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
