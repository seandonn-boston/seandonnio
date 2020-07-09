import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ value, link }) => (
  <li className="ListItem">
    <a href={link}>{value}</a>
  </li>
);

export default ListItem;

ListItem.propTypes = {
  value: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
