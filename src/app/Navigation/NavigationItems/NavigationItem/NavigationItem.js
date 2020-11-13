import React from "react";
import { NavLink } from "react-router-dom";

import { navigationItem, navigationItemActive } from "./NavigationItem.scss";

export default function NavigationItem({
  to,
  children: content,
  onNavigationItemClick: handleOnClick,
}) {
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
