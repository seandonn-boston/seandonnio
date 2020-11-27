import React from "react";
import PropTypes from "prop-types";

import { Line } from "./Line/Line";

import { x } from "./X.scss";

export const X = ({ handleOnClick }) => (
  <div className={x} onClick={() => handleOnClick()}>
    <Line />
    <Line reversed />
  </div>
);

X.propTypes = {
  handleOnClick: PropTypes.func,
};

X.defaultProps = {
  handleOnClick: () => {},
};
