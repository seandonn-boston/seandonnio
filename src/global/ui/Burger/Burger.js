import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import Patty from "./Patty/Patty";

import { selectIsActive, setBurgerIsActive } from "./burgerSlice";
import { navLinksOpener } from "../../../app/Navigation/NavLinks/navLinksSlice";
import { veilOpener } from "../../../app/Veil/veilSlice";

import { burger, burgerActive } from "./Burger.scss";

const Burger = () => {
  const dispatch = useDispatch();

  // TODO: Switch/Case statement with selectors as conditions, perhaps a hook? perhaps a toggle hook?
  // TODO: research if dispatch calls can be reduced into one dispatch
  // if dispatch can be reduced, this is going to be a prepare/initiate situation
  const handleOnClick = () => {
    dispatch(setBurgerIsActive());
    dispatch(navLinksOpener());
    dispatch(veilOpener());
  };

  const burgerIsActive = useSelector(selectIsActive);

  const burgerClasses = cx(burger, { [burgerActive]: burgerIsActive });

  return (
    <div
      className={burgerClasses}
      onClick={() => {
        handleOnClick();
      }}
    >
      <Patty />
      <Patty reversed />
    </div>
  );
};

export default Burger;
