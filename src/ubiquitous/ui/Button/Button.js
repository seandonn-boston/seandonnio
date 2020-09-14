import React from "react";
import PropTypes from "prop-types";
import { button, buttonContent } from "./Button.scss";

const Button = ({ content, link, target }) => (
  <a href={link} className={button} target={target}>
    <span className={buttonContent}>{content}</span>
  </a>
);

export default Button;

Button.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
};

Button.defaultProps = {
  target: null,
};
