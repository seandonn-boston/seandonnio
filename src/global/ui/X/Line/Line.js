import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { line, lineReversed } from "./Line.scss";

export default function Line({ reversed }) {
  const xLineClasses = cx(line, {
    [lineReversed]: reversed,
  });

  return <div className={xLineClasses} />;
}

Line.propTypes = {
  reversed: PropTypes.bool,
};

Line.defaultProps = {
  reversed: false,
};
