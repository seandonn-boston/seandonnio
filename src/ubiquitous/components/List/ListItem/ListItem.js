import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./ListItem.module.scss";

const ListItem = ({ isHoverable = false, children: child = null }) => {
  const listItemClasses = cx(styles.ListItem, { [styles["ListItem--hover"]]: isHoverable });
  return (
    <li className={listItemClasses}>
      {child}
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  isHoverable: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

ListItem.defaultProps = {
  isHoverable: false,
};
