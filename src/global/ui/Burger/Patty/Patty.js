import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { patty, pattyBottom, pattyTop, pattyActive } from "./Patty.scss";

export const Patty = ({ reversed, burgerIsActive }) => {
  const pattyClasses = cx(patty, {
    [pattyBottom]: reversed,
    [pattyTop]: !reversed,
    [pattyActive]: burgerIsActive,
  });

  return <div className={pattyClasses} />;
};

Patty.propTypes = {
  burgerIsActive: PropTypes.bool.isRequired,
  reversed: PropTypes.bool,
};

Patty.defaultProps = {
  reversed: false,
};
