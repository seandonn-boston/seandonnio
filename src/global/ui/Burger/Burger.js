import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { Patty } from "./Patty/Patty";

import { burger, burgerActive } from "./Burger.scss";

export const Burger = ({ onClickHandler, isActive }) => (
  <div
    className={cx(burger, { [burgerActive]: isActive })}
    onClick={() => onClickHandler()}
  >
    <Patty isActive={isActive} />
    <Patty isActive={isActive} reversed />
  </div>
);

Burger.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
