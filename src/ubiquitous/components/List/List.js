import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./List.module.scss";

const List = ({ children, isOpen }) => {
  const listClasses = cx(styles.List, { [styles["List-open"]]: isOpen });
  return <ul className={listClasses}>{children}</ul>;
};

export default List;

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.bool])),
  ]).isRequired,
};
