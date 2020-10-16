import React from "react";
import { useDispatch } from "react-redux";

import { veilOpener } from "./veilSlice";
import { navLinksOpener } from "../Navigation/NavLinks/navLinksSlice";
import { setBurgerIsActive } from "../../global/ui/Burger/burgerSlice";

import { veil } from "./Veil.scss";

export default function Veil() {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(veilOpener());
    dispatch(navLinksOpener());
    dispatch(setBurgerIsActive());
  };

  return <div className={veil} onClick={() => handleOnClick()} />;
}
