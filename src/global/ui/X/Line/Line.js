import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { line, lineReversed } from "./Line.scss";

export const Line = ({ reversed }) => (
  <div
    className={cx(line, {
      [lineReversed]: reversed,
    })}
  />
);

Line.propTypes = {
  reversed: PropTypes.bool,
};

Line.defaultProps = {
  reversed: false,
};
