import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { navigationItemClicked } from "./navigationItemSlice";

import { navigationItem, navigationItemActive } from "./NavigationItem.scss";

export default function NavigationItem({ to, children: content }) {
  const dispatch = useDispatch();

  return (
    <NavLink
      to={to}
      className={navigationItem}
      activeClassName={navigationItemActive}
      onClick={() => dispatch(navigationItemClicked())}
    >
      {content}
    </NavLink>
  );
}
