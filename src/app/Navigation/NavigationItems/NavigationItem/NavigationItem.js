import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { handleNavigationItemClicked } from "./navigationItemSlice";

import { navigationItem, navigationItemActive } from "./NavigationItem.scss";

export default function NavigationItem({ to, children: content }) {
  const dispatch = useDispatch();

  const handleOnClick = () => dispatch(handleNavigationItemClicked());

  return (
    <NavLink
      to={to}
      className={navigationItem}
      activeClassName={navigationItemActive}
      onClick={() => handleOnClick()}
    >
      {content}
    </NavLink>
  );
}
