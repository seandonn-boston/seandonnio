import React from "react";
import PropTypes from "prop-types";
import "./ListItem.scss";

const ListItem = ({ isHoverable = false, children: child = null }) => (
  <li className={`ListItem ${isHoverable ? "ListItem--hover" : ""}`}>
    {child}
  </li>
);

export default ListItem;

ListItem.propTypes = {
  isHoverable: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

ListItem.defaultProps = {
  isHoverable: false,
};
