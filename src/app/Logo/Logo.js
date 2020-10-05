import React from "react";
import { Link } from "react-router-dom";

import { logo } from "./Logo.scss";

const Logo = () => <Link to="/" className={logo} />;

export default Logo;
