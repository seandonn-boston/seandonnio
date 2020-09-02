import React from "react";
import PropTypes from "prop-types";
import List from "../../ubiquitous/components/List/List";
import ListItem from "../../ubiquitous/components/List/ListItem/ListItem";
import Link from "../../ubiquitous/components/Link/Link";
import Button from "../../ubiquitous/components/Button/Button";
import ResumePdf from "../../ubiquitous/assets/pdf/sean_donnellan_resume.pdf";
import useWindowSize from "../../ubiquitous/hooks/useWindowSize";
import cx from "classnames";
import { nav, navOpen } from "./Nav.module.scss";

const MOBILE_MAX_WIDTH = 768;

const Nav = ({ isOpen }) => {
  const isMobile = useWindowSize().width < MOBILE_MAX_WIDTH;
  const navClasses = cx(nav, { [navOpen]: isOpen });
  return (
    <nav className={navClasses}>
      <List {...isOpen}>
        <ListItem isHoverable>
          <Link content="About" href="#" />
        </ListItem>
        <ListItem isHoverable>
          <Link content="Portfolio" href="#" />
        </ListItem>
        <ListItem isHoverable>
          <Link content="Contact" href="#" />
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
