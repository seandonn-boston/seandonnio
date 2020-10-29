import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../global/ui/Button/Button";

import { selectIsMobile } from "../../../global/slices/clientSlice";
import {
  setBurgerIsActive,
  selectBurgerIsActive,
} from "../../../global/ui/Burger/burgerSlice";
import {
  modalOpener,
  selectModalIsOpen,
  setModalContentType,
  setModalContentFile,
} from "../../Modal/modalSlice";
import { navLinksOpener, selectNavLinksIsOpen } from "./navLinksSlice";
import { veilOpener, selectVeilIsOpen } from "../../Veil/veilSlice";

import { navLinks, navLink, navLinkActive } from "./NavLinks.scss";

import ResumePdf from "../../../global/assets/pdf/sean_donnellan_resume.pdf";

export default function NavLinks() {
  const isClientMobile = useSelector(selectIsMobile);
  const isBurgerActive = useSelector(selectBurgerIsActive);
  const isNavLinksOpen = useSelector(selectNavLinksIsOpen);
  const isVeilOpen = useSelector(selectVeilIsOpen);
  const isModalOpen = useSelector(selectModalIsOpen);

  const dispatch = useDispatch();

  const handleNavLinkOnClick = () => {
    isVeilOpen && dispatch(veilOpener());
    isNavLinksOpen && dispatch(navLinksOpener());
    isBurgerActive && dispatch(setBurgerIsActive());
  };

  const handleResumeOnClick = () => {
    dispatch(setModalContentType("pdf"));
    dispatch(setModalContentFile(ResumePdf));
    !isModalOpen && dispatch(modalOpener());
    isNavLinksOpen && dispatch(navLinksOpener());
    isBurgerActive && dispatch(setBurgerIsActive());
  };

  // Consider building these NavLinks with an array? store the navigation data (to, content) somewhere perhaps? Move to a separate Component?
  // Button can stay where it is, it's only used in mobile
  return (
    <nav className={navLinks}>
      <NavLink
        to="/about"
        className={navLink}
        activeClassName={navLinkActive}
        onClick={() => handleNavLinkOnClick()}
      >
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className={navLink}
        activeClassName={navLinkActive}
        onClick={() => handleNavLinkOnClick()}
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className={navLink}
        activeClassName={navLinkActive}
        onClick={() => handleNavLinkOnClick()}
      >
        Contact
      </NavLink>
      {isClientMobile && (
        <span className={navLink}>
          <Button
            content="Resume"
            handleOnClick={() => handleResumeOnClick()}
          />
        </span>
      )}
    </nav>
  );
}
