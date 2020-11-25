import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import cx from "classnames";

import { selectBurgerIsActive } from "../burgerSlice";

import { patty, pattyBottom, pattyTop, pattyActive } from "./Patty.scss";

export const Patty = ({ reversed }) => {
  const burgerIsActive = useSelector(selectBurgerIsActive);

  const pattyClasses = cx(patty, {
    [pattyBottom]: reversed,
    [pattyTop]: !reversed,
    [pattyActive]: burgerIsActive,
  });

  return <div className={pattyClasses} />;
};

Patty.propTypes = {
  reversed: PropTypes.bool,
};

Patty.defaultProps = {
  reversed: false,
};
