import React from "react";
import PropTypes from "prop-types";

import { button, buttonContent } from "./Button.scss";

export default function Button({
  typeAttribute,
  children: content,
  onButtonClick,
}) {
  return (
    <button
      className={button}
      name={content}
      type={typeAttribute}
      onClick={() => onButtonClick()}
    >
      <span className={buttonContent}>{content}</span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  typeAttribute: PropTypes.oneOf(["button", "reset", "submit"]),
  onButtonClick: PropTypes.func,
};

Button.defaultProps = {
  typeAttribute: "button",
  onButtonClick: () => {},
};
