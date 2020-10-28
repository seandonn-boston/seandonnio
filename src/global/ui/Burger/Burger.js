import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import Patty from "./Patty/Patty";

import { selectBurgerIsActive, setBurgerIsActive } from "./burgerSlice";
import { navLinksOpener } from "../../../app/Navigation/NavLinks/navLinksSlice";
import { veilOpener } from "../../../app/Veil/veilSlice";

import { burger, burgerActive } from "./Burger.scss";

export default function Burger() {
  const burgerIsActive = useSelector(selectBurgerIsActive);

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setBurgerIsActive());
    dispatch(navLinksOpener());
    dispatch(veilOpener());
  };

  const burgerClasses = cx(burger, { [burgerActive]: burgerIsActive });

  return (
    <div className={burgerClasses} onClick={() => handleOnClick()}>
      <Patty />
      <Patty reversed />
    </div>
  );
}
