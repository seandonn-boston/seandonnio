import React from "react";
import PropTypes from "prop-types";
import "./ListItem.scss";

const ListItem = ({ content, link, children: child = null }) => (
  <li className="ListItem ListItem-navigation ListItem-navigation--active">
    {link ? (
      <a href={link} className="ListItem-link">
        {content}
      </a>
    ) : (
      child
    )}
  </li>
);

export default ListItem;

ListItem.propTypes = {
  content: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.element,
};

ListItem.defaultProps = {
  content: "",
  link: "",
  children: null,
};
