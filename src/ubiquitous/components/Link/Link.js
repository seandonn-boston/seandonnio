import React from "react";
import PropTypes from "prop-types";
import "./Link.scss";

const Link = ({ content = "", link = null }) => (
  <a href={link} className="Link">
    {content}
  </a>
);

export default Link;

Link.propTypes = {
  content: PropTypes.string,
  link: PropTypes.string,
};

Link.defaultProps = {
  content: "",
  link: null,
};
