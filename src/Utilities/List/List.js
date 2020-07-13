import React from "react";
import PropTypes from "prop-types";
import "./List.scss";

const List = ({ children: child }) => <ul className="List">{child}</ul>;

export default List;

List.propTypes = {
  children: PropTypes.instanceOf(Element).isRequired,
};
