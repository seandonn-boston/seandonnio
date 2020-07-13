import React from "react";
import PropTypes from "prop-types";

const Button = ({ content, classes }) => (
  <span className={`Button ${classes}`}>
    <a href="#">{content}</a>
  </span>
);

export default Button;

Button.propTypes = {
  content: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};
