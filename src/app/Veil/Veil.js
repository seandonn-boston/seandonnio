import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import { handleVeilClicked } from "./veilSlice";
import { selectNavigationItemsIsOpen } from "../Navigation/NavigationItems/navigationItemsSlice";

import { veil, veilBehindNavigationItems } from "./Veil.scss";

export const Veil = () => {
  const isNavigationItemsOpen = useSelector(selectNavigationItemsIsOpen);

  const dispatch = useDispatch();

  const veilClasses = cx(veil, {
    [veilBehindNavigationItems]: isNavigationItemsOpen,
  });

  return (
    <div
      className={veilClasses}
      onClick={() => dispatch(handleVeilClicked())}
    />
  );
};
