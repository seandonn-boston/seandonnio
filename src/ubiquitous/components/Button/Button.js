import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Button.module.scss";

const Button = ({ content, link, target }) => {
  const anchorClasses = cx(styles.Button);
  const contentClasses = cx(styles["Button-content"]);
  return (
    <a href={link} className={anchorClasses} target={target}>
      <span className={contentClasses}>{content}</span>
    </a>
  );
};

export default Button;

Button.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
};

Button.defaultProps = {
  target: null,
};
