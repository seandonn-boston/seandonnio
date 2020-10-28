import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../global/ui/Button/Button";

import { selectIsMobile } from "../../../global/slices/clientSlice";
import { setBurgerIsActive } from "../../../global/ui/Burger/burgerSlice";
import { modalOpener } from "../../Modal/modalSlice";
import { navLinksOpener } from "./navLinksSlice";
import { veilOpener } from "../../Veil/veilSlice";

import { navLinks, navLink, navLinkActive } from "./NavLinks.scss";

export default function NavLinks() {
  const dispatch = useDispatch();
  const isClientMobile = useSelector(selectIsMobile);

  const handleNavLinkOnClick = () => {
    dispatch(veilOpener());
    dispatch(navLinksOpener());
    dispatch(setBurgerIsActive());
  };

  const handleResumeOnClick = () => {
    dispatch(modalOpener());
    dispatch(navLinksOpener());
    dispatch(setBurgerIsActive());
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
