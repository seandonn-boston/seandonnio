import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Veil.module.scss";

const Veil = ({ isMobileNavOpen, setIsMobileNavOpen }) => {
  const veilClasses = cx(styles.Veil);
  return (
    <div
      className={veilClasses}
      onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
    />
  );
};

export default Veil;

Veil.propTypes = {
  isMobileNavOpen: PropTypes.bool.isRequired,
  setIsMobileNavOpen: PropTypes.func.isRequired,
};
