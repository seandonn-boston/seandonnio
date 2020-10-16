import React from "react";
import { useDispatch } from "react-redux";

import { veilOpener } from "./veilSlice";
import { navLinksOpener } from "../Navigation/NavLinks/navLinksSlice";
import { setBurgerIsActive } from "../../global/ui/Burger/burgerSlice";

import { veil } from "./Veil.scss";

const Veil = () => {
  const dispatch = useDispatch();

  // TODO: Switch/Case statement with selectors as conditions, perhaps a hook? perhaps a toggle hook?
  // TODO: research if dispatch calls can be reduced into one dispatch
  // if dispatch can be reduced, this is going to be a prepare/initiate situation
  const handleOnClick = () => {
    dispatch(veilOpener());
    dispatch(navLinksOpener());
    dispatch(setBurgerIsActive());
  };

  return <div className={veil} onClick={() => handleOnClick()} />;
};

export default Veil;
