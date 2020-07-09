import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ value }) => <li className="ListItem">{value}</li>;

export default ListItem;

ListItem.propTypes = {
  value: PropTypes.string.isRequired,
};
