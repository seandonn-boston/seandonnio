import React from "react";
import PropTypes from "prop-types";

import { button, buttonContent } from "./Button.scss";

export default function Button({ content, type, handleOnClick }) {
  return (
    <button
      className={button}
      name={content}
      type={type}
      onClick={() => handleOnClick()}
    >
      <span className={buttonContent}>{content}</span>
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["button", "reset", "submit"]),
};

Button.defaultProps = {
  type: "button",
};
