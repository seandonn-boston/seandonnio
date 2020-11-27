import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { Patty } from "./Patty/Patty";

import { burger, burgerActive } from "./Burger.scss";

export const Burger = ({ onClickHandler, burgerIsActive }) => {
  const burgerClasses = cx(burger, { [burgerActive]: burgerIsActive });

  return (
    <div className={burgerClasses} onClick={() => onClickHandler()}>
      <Patty burgerIsActive={burgerIsActive} />
      <Patty burgerIsActive={burgerIsActive} reversed />
    </div>
  );
};

Burger.propTypes = {
  burgerIsActive: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
