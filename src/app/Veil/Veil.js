import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import { veilOpener, selectVeilIsOpen } from "./veilSlice";
import {
  navLinksOpener,
  selectNavLinksIsOpen,
} from "../Navigation/NavLinks/navLinksSlice";
import {
  setBurgerIsActive,
  selectBurgerIsActive,
} from "../../global/ui/Burger/burgerSlice";
import {
  modalOpener,
  selectModalIsOpen,
  selectModalContentFile,
  setModalContentType,
  setModalContentFile,
} from "../Modal/modalSlice";

import { veil, veilBehindNavLinks } from "./Veil.scss";

export default function Veil() {
  const isNavLinksOpen = useSelector(selectNavLinksIsOpen);
  const isBurgerActive = useSelector(selectBurgerIsActive);
  const isModalOpen = useSelector(selectModalIsOpen);
  const isVeilOpen = useSelector(selectVeilIsOpen);
  const modalContentFile = useSelector(selectModalContentFile);

  const dispatch = useDispatch();

  const handleOnClick = () => {
    isVeilOpen && dispatch(veilOpener());
    isNavLinksOpen && dispatch(navLinksOpener());
    isBurgerActive && dispatch(setBurgerIsActive());
    if (isModalOpen) {
      dispatch(modalOpener());
      dispatch(setModalContentType(""));
      modalContentFile && dispatch(setModalContentFile(null));
    }
  };

  const veilClasses = cx(veil, {
    [veilBehindNavLinks]: isNavLinksOpen,
  });

  return <div className={veilClasses} onClick={() => handleOnClick()} />;
}
