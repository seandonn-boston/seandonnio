import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { navigationItemsClosed } from "../navigationItemsSlice";

import { navigationItem, navigationItemActive } from "./NavigationItem.scss";

export const NavigationItem = ({ to, children: content }) => {
  const dispatch = useDispatch();
  return (
    <NavLink
      to={to}
      className={navigationItem}
      activeClassName={navigationItemActive}
      onClick={() => dispatch(navigationItemsClosed())}
    >
      {content}
    </NavLink>
  );
};
