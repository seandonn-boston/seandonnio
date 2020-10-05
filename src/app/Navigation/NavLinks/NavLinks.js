import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import List from "../../../global/ui/List/List";
import ListItem from "../../../global/ui/List/ListItem/ListItem";
import Button from "../../../global/ui/Button/Button";
import ResumePdf from "../../../global/assets/pdf/sean_donnellan_resume.pdf";

import useWindowSize from "../../../global/hooks/useWindowSize";

import cx from "classnames";
import {
  navLinks,
  navLinksOpen,
  navLink,
  navLinkActive,
} from "./NavLinks.scss";

const MOBILE_MAX_WIDTH = 768;

const NavLinks = ({ isOpen }) => {
  const isMobile = useWindowSize().width < MOBILE_MAX_WIDTH;
  const navLinksClasses = cx(navLinks, {
    [navLinksOpen]: isOpen,
  });
  return (
    <nav className={navLinksClasses}>
      <List {...isOpen}>
        <ListItem isHoverable>
          <NavLink
            to="/about"
            className={navLink}
            activeClassName={navLinkActive}
          >
            About
          </NavLink>
        </ListItem>
        <ListItem isHoverable>
          <NavLink
            to="/portfolio"
            className={navLink}
            activeClassName={navLinkActive}
          >
            Portfolio
          </NavLink>
        </ListItem>
        <ListItem isHoverable>
          <NavLink
            to="/contact"
            className={navLink}
            activeClassName={navLinkActive}
          >
            Contact
          </NavLink>
        </ListItem>
        {isMobile && (
          <ListItem>
            <Button content="Resume" link={ResumePdf} target="_blank" />
          </ListItem>
        )}
      </List>
    </nav>
  );
};

export default NavLinks;

NavLinks.propTypes = {
  isOpen: PropTypes.bool,
};

NavLinks.defaultProps = {
  isOpen: false,
};
