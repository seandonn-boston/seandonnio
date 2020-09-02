import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { patty, pattyBottom, pattyTop, pattyOpen } from "./Patty.scss";

const Patty = ({ reversed, isOpen }) => {
  const pattyClasses = cx(patty, {
    [pattyBottom]: reversed,
    [pattyTop]: !reversed,
    [pattyOpen]: isOpen,
  });
  return <div className={pattyClasses} />;
};

export default Patty;

Patty.propTypes = {
  reversed: PropTypes.bool,
  isOpen: PropTypes.bool,
};

Patty.defaultProps = {
  reversed: false,
  isOpen: false,
};
