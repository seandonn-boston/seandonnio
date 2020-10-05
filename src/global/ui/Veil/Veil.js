import React from "react";
import PropTypes from "prop-types";
import { veil } from "./Veil.scss";

const Veil = ({ isMobileNavOpen, setIsMobileNavOpen }) => (
  <div className={veil} onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} />
);

export default Veil;

Veil.propTypes = {
  isMobileNavOpen: PropTypes.bool.isRequired,
  setIsMobileNavOpen: PropTypes.func.isRequired,
};
