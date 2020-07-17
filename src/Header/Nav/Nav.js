import React from "react";
import List from "../../ubiquitous/components/List/List";
import ListItem from "../../ubiquitous/components/ListItem/ListItem";
import Button from "../../ubiquitous/components/Button/Button";
import "./Nav.scss";

const Nav = () => (
  <nav className="Nav">
    <List>
      <ListItem content="About" link="#" />
      <ListItem content="Portfolio" link="#" />
      <ListItem content="Contact" link="#" />
      <ListItem>
        <Button content="Resume" link="#" />
      </ListItem>
    </List>
  </nav>
);

export default Nav;
