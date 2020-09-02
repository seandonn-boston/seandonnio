import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { listItem, listItemHover } from "./ListItem.scss";

const ListItem = ({ isHoverable = false, children: child = null }) => {
  const listItemClasses = cx(listItem, { [listItemHover]: isHoverable });
  return <li className={listItemClasses}>{child}</li>;
};

export default ListItem;

ListItem.propTypes = {
  isHoverable: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

ListItem.defaultProps = {
  isHoverable: false,
};
