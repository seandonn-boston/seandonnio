import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import Patty from "./Patty/Patty";

import { selectIsActive, setBurgerIsActive } from "./burgerSlice";
import { navLinksOpener } from "../../../app/Navigation/NavLinks/navLinksSlice";
import { veilOpener } from "../../../app/Veil/veilSlice";
import { modalOpener } from "../../../app/Modal/modalSlice";

import { burger, burgerActive } from "./Burger.scss";

export default function Burger() {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setBurgerIsActive());
    dispatch(navLinksOpener());
    dispatch(veilOpener());
    dispatch(modalOpener());
  };

  const burgerIsActive = useSelector(selectIsActive);

  const burgerClasses = cx(burger, { [burgerActive]: burgerIsActive });

  return (
    <div className={burgerClasses} onClick={() => handleOnClick()}>
      <Patty />
      <Patty reversed />
    </div>
  );
}
