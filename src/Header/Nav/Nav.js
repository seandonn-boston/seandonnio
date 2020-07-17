import React from "react";
import List from "../../ubiquitous/components/List/List";
import ListItem from "../../ubiquitous/components/ListItem/ListItem";
import Button from "../../ubiquitous/components/Button/Button";
import useWindowSize from "../../ubiquitous/hooks/useWindowSize";
import "./Nav.scss";

const MOBILE_MAX_WIDTH = 768;

const Nav = () => {
  const isMobile = useWindowSize().width < MOBILE_MAX_WIDTH;
  return (
    <nav className="Nav">
      <List>
        <ListItem content="About" link="#" />
        <ListItem content="Portfolio" link="#" />
        <ListItem content="Contact" link="#" />
        {isMobile && (
          <ListItem>
            <Button content="Resume" link="#" />
          </ListItem>
        )}
      </List>
    </nav>
  );
};

export default Nav;
