import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { navigationItemsClosed } from "../Navigation/NavigationItems/navigationItemsSlice";

import { logo } from "./Logo.scss";

const Logo = () => {
  const dispatch = useDispatch();

  return (
    <Link
      to="/" // TODO: Extract to const file
      className={logo}
      onClick={() => dispatch(navigationItemsClosed())}
    />
  );
};

export default Logo;
