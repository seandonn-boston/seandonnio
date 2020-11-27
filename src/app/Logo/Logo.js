import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { logo } from "./Logo.scss";

export const Logo = ({ onClickHandler }) => (
  <Link
    to="/" // TODO: Extract to const file
    className={logo}
    onClick={() => onClickHandler()}
  />
);

Logo.propTypes = {
  onClickHandler: PropTypes.func,
};

Logo.defaultProps = {
  onClickHandler: () => {},
};
