import React from "react";
import PropTypes from "prop-types";
import { link } from "./Link.module.scss";

const Link = ({ content = "", href = null }) => (
  <a href={href} className={link}>
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
