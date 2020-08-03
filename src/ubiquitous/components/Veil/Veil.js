import React from "react";
import "./Veil.scss";

const Veil = ({ isMobileNavOpen, setIsMobileNavOpen }) => (
  <div className="Veil" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} />
);

export default Veil;
