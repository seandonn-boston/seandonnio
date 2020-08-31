import React from "react";
import cx from "classnames";
import styles from "./Logo.module.scss";

const Logo = () => {
  const logoStyles = cx(styles.Logo);
  return <span className={logoStyles} />;
};

export default Logo;
