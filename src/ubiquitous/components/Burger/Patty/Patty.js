import React from "react";
import PropTypes from "prop-types";
import "./Patty.scss";

const Patty = ({ reversed }) => <div className="Patty" />;

export default Patty;

Patty.propTypes = {
  reversed: PropTypes.boolean,
};

Patty.defaultProps = {
  reversed: false,
};
