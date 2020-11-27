import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  navigationItemsToggled,
  selectNavigationItemsIsOpen,
} from "../navigationItemsSlice";

import { navigationItem, navigationItemActive } from "./NavigationItem.scss";

export const NavigationItem = ({ to, children: content }) => {
  const dispatch = useDispatch();

  const isNavigationItemsOpen = useSelector(selectNavigationItemsIsOpen);
  return (
    <NavLink
      to={to}
      className={navigationItem}
      activeClassName={navigationItemActive}
      onClick={() => {
        isNavigationItemsOpen && dispatch(navigationItemsToggled());
      }}
    >
      {content}
    </NavLink>
  );
};
