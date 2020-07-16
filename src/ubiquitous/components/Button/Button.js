import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ content, link }) => (
  <a href={link} className="Button">
    <span className="Button-content">{content}</span>
  </a>
);

export default Button;

Button.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
