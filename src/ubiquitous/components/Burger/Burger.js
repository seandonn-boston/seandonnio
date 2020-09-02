import React from "react";
import PropTypes from "prop-types";
import Patty from "./Patty/Patty";
import cx from "classnames";
import { burger, burgerOpen } from "./Burger.module.scss";

const Burger = ({ handleIsOpen, isOpen }) => {
  const burgerClasses = cx(burger, { [burgerOpen]: isOpen });
  return (
    <div className={burgerClasses} onClick={() => handleIsOpen(!isOpen)}>
      <Patty {...{ isOpen }} />
      <Patty {...{ isOpen }} reversed />
    </div>
  );
};

export default Burger;

Burger.propTypes = {
  handleIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
