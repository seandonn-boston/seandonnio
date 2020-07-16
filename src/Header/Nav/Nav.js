import React from "react";
import Burger from "../../ubiquitous/components/Burger/Burger";
import List from "../../ubiquitous/components/List/List";
import ListItem from "../../ubiquitous/components/ListItem/ListItem";
import Button from "../../ubiquitous/components/Button/Button";
import useWindowSize from "../../ubiquitous/functions/useWindowSize";
import "./Nav.scss";

const Nav = () => {
  const isMobile = useWindowSize().width < 768;

  console.log("isMobile is", isMobile); // REMOVE
  return (
    <>
      {isMobile && <Burger />}
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
    </>
  );
};

export default Nav;
