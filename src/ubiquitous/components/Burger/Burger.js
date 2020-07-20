import React from "react";
import PropTypes from "prop-types";
import Patty from "./Patty/Patty";
import "./Burger.scss";

const Burger = ({ handleIsOpen, isOpen }) => (
  <div
    className={`Burger ${isOpen ? "Burger-open" : ""}`}
    onClick={() => {
      handleIsOpen(!isOpen);
    }}
  >
    <Patty {...{ isOpen }} />
    <Patty {...{ isOpen }} reversed />
  </div>
);

export default Burger;

Burger.propTypes = {
  handleIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
