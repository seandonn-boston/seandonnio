import React from "react";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";

const Nav = () => (
  <nav>
    <List>
      <ListItem value="One" />
      <ListItem value="Two" />
      <ListItem value="Three" />
    </List>
  </nav>
);

export default Nav;
