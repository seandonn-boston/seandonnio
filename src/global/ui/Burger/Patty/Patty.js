import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { patty, pattyBottom, pattyTop, pattyActive } from "./Patty.scss";

export const Patty = ({ reversed, isActive }) => (
  <div
    className={cx(patty, {
      [pattyBottom]: reversed,
      [pattyTop]: !reversed,
      [pattyActive]: isActive,
    })}
  />
);

Patty.propTypes = {
  isActive: PropTypes.bool.isRequired,
  reversed: PropTypes.bool,
};

Patty.defaultProps = {
  reversed: false,
};
