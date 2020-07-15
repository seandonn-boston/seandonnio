import React from "react";
import PropTypes from "prop-types";
import "./Patty.scss";

const Patty = ({ position }) => <div className="Patty" />;

export default Patty;

Patty.propTypes = {
  position: PropTypes.string.isRequired,
};
