import React from "react";
import PropTypes from "prop-types";

import { link } from "./Link.scss";

export default function Link({ href, target, children }) {
  return (
    <a className={link} href={href} target={target} rel="noopener noreferrer">
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired, // Can PropTypes.element be more specific, so only certain elements are accepted?
};
