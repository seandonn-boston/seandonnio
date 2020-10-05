import React from "react";
import PropTypes from "prop-types";
import List from "../../../global/ui/List/List";
import ListItem from "../../../global/ui/List/ListItem/ListItem";
import NavigationLink from "../NavigationLink/NavigationLink";
import Button from "../../../global/ui/Button/Button";
import ResumePdf from "../../../global/assets/pdf/sean_donnellan_resume.pdf";
import useWindowSize from "../../../global/hooks/useWindowSize";
import cx from "classnames";
import { nav, navOpen } from "./Nav.scss";

const MOBILE_MAX_WIDTH = 768;

const Nav = ({ isOpen }) => {
  const isMobile = useWindowSize().width < MOBILE_MAX_WIDTH;
  const navClasses = cx(nav, { [navOpen]: isOpen });
  return (
    <nav className={navClasses}>
      <List {...isOpen}>
        <ListItem isHoverable>
          <NavigationLink content="About" path="/about" active={false} />
        </ListItem>
        <ListItem isHoverable>
          <NavigationLink content="Portfolio" path="/portfolio" active={false} />
        </ListItem>
        <ListItem isHoverable>
          <NavigationLink content="Contact" path="/contact" active={false} />
        </ListItem>
        {isMobile && (
          <ListItem>
            <Button content="Resume" href={ResumePdf} target="_blank" />
          </ListItem>
        )}
      </List>
    </nav>
  );
};

export default Nav;

Nav.propTypes = {
  isOpen: PropTypes.bool,
};

Nav.defaultProps = {
  isOpen: false,
};
