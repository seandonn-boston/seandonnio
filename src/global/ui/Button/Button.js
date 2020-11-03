import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { buttonClicked } from "./buttonSlice";

import { button, buttonContent } from "./Button.scss";

export default function Button({
  typeAttribute,
  children: content,
  buttonClickActionType,
}) {
  const dispatch = useDispatch();

  return (
    <button
      className={button}
      name={content}
      type={typeAttribute}
      onClick={(e) => dispatch(buttonClicked(e, buttonClickActionType))}
    >
      <span className={buttonContent}>{content}</span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  typeAttribute: PropTypes.oneOf(["button", "reset", "submit"]),
  buttonClickActionType: PropTypes.string,
};

Button.defaultProps = {
  typeAttribute: "button",
  buttonClickActionType: null,
};
