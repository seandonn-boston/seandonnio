import React from "react";
import PropTypes from "prop-types";
import "./List.scss";

const List = ({ children, isOpen }) => (
  <ul className={`List ${isOpen ? "List-open" : ""}`}>{children}</ul>
);

export default List;

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.bool])),
  ]).isRequired,
};
