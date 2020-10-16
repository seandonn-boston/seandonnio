import React from "react";
import { Link } from "react-router-dom";

import { logo } from "./Logo.scss";

export default function Logo() {
  return <Link to="/" className={logo} />;
}
