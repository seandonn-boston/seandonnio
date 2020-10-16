import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import cx from "classnames";

import Button from "../../../global/ui/Button/Button";

import { selectIsMobile } from "../../../global/slices/clientSlice";
import { selectIsOpen } from "./navLinksSlice";

import ResumePdf from "../../../global/assets/pdf/sean_donnellan_resume.pdf"; // TODO open in a modal

import {
  navLinks,
  navLinksOpen,
  navLink,
  navLinkActive,
} from "./NavLinks.scss"; // TODO fix the render + animation issue (won't animate) https://reactjs.org/docs/animation.html

export default function NavLinks() {
  const isClientMobile = useSelector(selectIsMobile);
  const areNavLinksOpen = useSelector(selectIsOpen);

  const navLinksClasses = cx(navLinks, { [navLinksOpen]: areNavLinksOpen });

  // Consider building these NavLinks with an array? store the navigation data (to, content) somewhere perhaps? Move to a separate Component?
  // Button can stay where it is, it's only used in mobile
  return (
    <nav className={navLinksClasses}>
      <NavLink to="/about" className={navLink} activeClassName={navLinkActive}>
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className={navLink}
        activeClassName={navLinkActive}
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className={navLink}
        activeClassName={navLinkActive}
      >
        Contact
      </NavLink>
      {isClientMobile && (
        <span className={navLink}>
          <Button content="Resume" link={ResumePdf} target="_blank" />
        </span>
      )}
    </nav>
  );
}
