import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import { handleVeilOnClick } from "./veilSlice";
import { selectNavLinksIsOpen } from "../Navigation/NavLinks/navLinksSlice";

import { veil, veilBehindNavLinks } from "./Veil.scss";

export default function Veil() {
  const isNavLinksOpen = useSelector(selectNavLinksIsOpen);

  const dispatch = useDispatch();

  const handleOnClick = () => dispatch(handleVeilOnClick());

  const veilClasses = cx(veil, {
    [veilBehindNavLinks]: isNavLinksOpen,
  });

  return <div className={veilClasses} onClick={() => handleOnClick()} />;
}
