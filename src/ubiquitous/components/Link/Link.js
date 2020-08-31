import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Link.module.scss";

const Link = ({ content = "", link = null }) => {
  const linkClasses = cx(styles.Link);
  return (
    <a href={link} className={linkClasses}>
      {content}
    </a>
  );
};

export default Link;

Link.propTypes = {
  content: PropTypes.string,
  link: PropTypes.string,
};

Link.defaultProps = {
  content: "",
  link: null,
};
