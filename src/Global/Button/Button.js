import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ content }) => (
  <a href="#" className="Button">
    <span className="Button-content">{content}</span>
  </a>
);

export default Button;

Button.propTypes = {
  content: PropTypes.string.isRequired,
};
