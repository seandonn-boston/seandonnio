import React from "react";
import PropTypes from "prop-types";

import { button, buttonContent } from "./Button.scss";

export const Button = ({ typeAttribute, children: content, handleOnClick }) => (
  <button
    className={button}
    name={content}
    type={typeAttribute}
    onClick={() => handleOnClick()}
  >
    <span className={buttonContent}>{content}</span>
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  typeAttribute: PropTypes.oneOf(["button", "reset", "submit"]),
  handleOnClick: PropTypes.func,
};

Button.defaultProps = {
  typeAttribute: "button",
  handleOnClick: () => {},
};
