import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { navigationLink } from "./NavigationLink.scss";

const NavigationLink = ({ path, content = "", active = false }) => (
  <NavLink to={path} className={navigationLink} active={active}>
    {content}
  </NavLink>
);

export default NavigationLink;

NavigationLink.propTypes = {
  content: PropTypes.string,
  path: PropTypes.string,
  active: PropTypes.bool
};

NavigationLink.defaultProps = {
  content: "",
  path: null,
  active: false
};
