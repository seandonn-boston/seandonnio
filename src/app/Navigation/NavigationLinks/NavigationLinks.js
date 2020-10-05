import React from "react";
import PropTypes from "prop-types";

import NavigationLink from "./NavigationLink/NavigationLink";
import List from "../../../global/ui/List/List";
import ListItem from "../../../global/ui/List/ListItem/ListItem";
import Button from "../../../global/ui/Button/Button";
import ResumePdf from "../../../global/assets/pdf/sean_donnellan_resume.pdf";

import useWindowSize from "../../../global/hooks/useWindowSize";

import cx from "classnames";
import { navigationLinks, navigationLinksOpen } from "./NavigationLinks.scss";

const MOBILE_MAX_WIDTH = 768;

const navigationLinkIsActive = true;

const NavigationLinks = ({ isOpen }) => {
  const isMobile = useWindowSize().width < MOBILE_MAX_WIDTH;
  const navigationLinksClasses = cx(navigationLinks, {
    [navigationLinksOpen]: isOpen,
  });
  return (
    <nav className={navigationLinksClasses}>
      <List {...isOpen}>
        <ListItem isHoverable>
          <NavigationLink
            content="About"
            path="/about"
            active={navigationLinkIsActive}
          />
        </ListItem>
        <ListItem isHoverable>
          <NavigationLink
            content="Portfolio"
            path="/portfolio"
            active={navigationLinkIsActive}
          />
        </ListItem>
        <ListItem isHoverable>
          <NavigationLink
            content="Contact"
            path="/contact"
            active={navigationLinkIsActive}
          />
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

export default NavigationLinks;

NavigationLinks.propTypes = {
  isOpen: PropTypes.bool,
};

NavigationLinks.defaultProps = {
  isOpen: false,
};
