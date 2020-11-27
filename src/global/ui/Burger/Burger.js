import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import { Patty } from "./Patty/Patty";

import { selectBurgerIsActive } from "./burgerSlice";
import { navigationItemsToggled } from "../../../app/Navigation/NavigationItems/navigationItemsSlice";

import { burger, burgerActive } from "./Burger.scss";

export const Burger = () => {
  const burgerIsActive = useSelector(selectBurgerIsActive);

  const dispatch = useDispatch();

  const burgerClasses = cx(burger, { [burgerActive]: burgerIsActive });

  return (
    <div
      className={burgerClasses}
      onClick={() => dispatch(navigationItemsToggled())}
    >
      <Patty />
      <Patty reversed />
    </div>
  );
};
