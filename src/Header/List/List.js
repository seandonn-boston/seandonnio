import React from "react";
import PropTypes from "prop-types";

const List = ({ children: child }) => <ul className="List">{child}</ul>;

export default List;

List.propTypes = {
  child: PropTypes.instanceOf(Element).isRequired,
};
