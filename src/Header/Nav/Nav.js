import React from "react";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";

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
