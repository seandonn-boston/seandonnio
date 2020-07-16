import React from "react";
import PropTypes from "prop-types";
import "./Patty.scss";

const Patty = ({ reversed }) => (
  <div className={`Patty ${reversed ? "Patty-reversed" : ""}`} />
);

export default Patty;

Patty.propTypes = {
  reversed: PropTypes.bool,
};

Patty.defaultProps = {
  reversed: false,
};
