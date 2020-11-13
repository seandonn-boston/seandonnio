import React from "react";
import { Link } from "react-router-dom";

import { logo } from "./Logo.scss";

// TODO: Abstract constant with NavigationItems routes
const Logo = () => <Link to="/" className={logo} />;

export default Logo;
