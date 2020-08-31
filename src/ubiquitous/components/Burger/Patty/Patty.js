import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Patty.module.scss";

const Patty = ({ reversed, isOpen }) => {
  const pattyClasses = cx(styles.Patty, {
    [styles["Patty--bottom"]]: reversed,
    [styles["Patty--top"]]: !reversed,
    [styles["Patty-open"]]: isOpen,
  });
  return <div className={pattyClasses} />;
};

export default Patty;

Patty.propTypes = {
  reversed: PropTypes.bool,
  isOpen: PropTypes.bool,
};

Patty.defaultProps = {
  reversed: false,
  isOpen: false,
};
