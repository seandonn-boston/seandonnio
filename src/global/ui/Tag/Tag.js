import React from "react";
import PropTypes from "prop-types";

import { tag } from "./Tag.scss";

export const Tag = ({ onClickHandler, data }) => (
  <span className={tag} onClick={onClickHandler} data-value={data}>
    {data}
  </span>
);

Tag.propTypes = {
  data: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
};

Tag.defaultProps = {
  onClickHandler: () => {},
};
