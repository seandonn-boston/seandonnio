import React from "react";
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
