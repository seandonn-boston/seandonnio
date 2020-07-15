import React from "react";
import PropTypes from "prop-types";
import "./ListItem.scss";

const ListItem = ({ value, link }) => (
  <li className="ListItem ListItem-navigation ListItem-navigation--active">
    <a href={link} className="ListItem-link">
      {value}
    </a>
  </li>
);

export default ListItem;

ListItem.propTypes = {
  value: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
