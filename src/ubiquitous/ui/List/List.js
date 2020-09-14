import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { list, listOpen } from "./List.scss";

const List = ({ children, isOpen }) => {
  const listClasses = cx(list, { [listOpen]: isOpen });
  return <ul className={listClasses}>{children}</ul>;
};

export default List;

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.bool])),
  ]).isRequired,
};
