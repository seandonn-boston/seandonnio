import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import { veilOpener } from "./veilSlice";
import {
  navLinksOpener,
  selectIsNavLinksOpen,
} from "../Navigation/NavLinks/navLinksSlice";
import {
  setBurgerIsActive,
  selectIsBurgerActive,
} from "../../global/ui/Burger/burgerSlice";
import { modalOpener, selectIsModalOpen } from "../Modal/modalSlice";

import { veil, veilBehindNav } from "./Veil.scss";

export default function Veil() {
  const dispatch = useDispatch();
  const areNavLinksOpen = useSelector(selectIsNavLinksOpen);
  const isBurgerActive = useSelector(selectIsBurgerActive);
  const isModalOpen = useSelector(selectIsModalOpen);

  const veilClasses = cx(veil, {
    [veilBehindNav]: areNavLinksOpen,
  });

  const handleOnClick = () => {
    dispatch(veilOpener());
    // only close the following if it is already open
    areNavLinksOpen && dispatch(navLinksOpener());
    isBurgerActive && dispatch(setBurgerIsActive());
    isModalOpen && dispatch(modalOpener());
  };

  return <div className={veilClasses} onClick={() => handleOnClick()} />;
}
