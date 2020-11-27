import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  navigationItemsToggled,
  selectNavigationItemsIsOpen,
} from "../Navigation/NavigationItems/navigationItemsSlice";

import { logo } from "./Logo.scss";

export const Logo = () => {
  const dispatch = useDispatch();

  const isNavigationItemsOpen = useSelector(selectNavigationItemsIsOpen);
  return (
    <Link
      to="/" // TODO: Extract to const file
      className={logo}
      onClick={() =>
        isNavigationItemsOpen && dispatch(navigationItemsToggled())
      }
    />
  );
};
