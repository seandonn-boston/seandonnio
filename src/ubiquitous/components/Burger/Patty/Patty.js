import React from "react";
import PropTypes from "prop-types";
import "./Patty.scss";

const Patty = ({ reversed, isOpen }) => (
  <div
    className={`Patty ${reversed ? "Patty--bottom" : "Patty--top"} ${
      isOpen ? "Patty-open" : ""
    }`}
  />
);

export default Patty;

Patty.propTypes = {
  reversed: PropTypes.bool,
  isOpen: PropTypes.bool,
};

Patty.defaultProps = {
  reversed: false,
  isOpen: false,
};
