import React from "react";
import PropTypes from "prop-types";
import Link from "../../Link/Link";
import "./ListItem.scss";

const ListItem = ({ content = "", link = null, children: child = null }) => (
  <li className="ListItem ListItem-navigation">
    {link ? <Link {...link} {...content} /> : child}
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
  link: null,
  children: null,
};
