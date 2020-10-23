import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import NavLinks from "./NavLinks/NavLinks";
import Logo from "../Logo/Logo";
import Burger from "../../global/ui/Burger/Burger";
import Button from "../../global/ui/Button/Button";

import { selectIsOpen } from "./NavLinks/navLinksSlice";
import { selectIsMobile } from "../../global/slices/clientSlice";

import ResumePdf from "../../global/assets/pdf/sean_donnellan_resume.pdf"; // TODO open in a modal

import {
  navigation,
  navigationInnerWrapper,
  navigationItemRightAlign,
} from "./Navigation.scss";
import {
  navLinksEnter,
  navLinksEnterActive,
  navLinksEnterDone,
  navLinksExitActive,
  navLinksExit,
} from "./NavLinks/NavLinks.scss";
import { toL } from "../../global/styles/config/_timeouts.scss";

export default function Navigation() {
  const isClientMobile = useSelector(selectIsMobile);
  const areNavLinksOpen = useSelector(selectIsOpen);

  const navLinksCSSTransitionClassNames = {
    enter: navLinksEnter,
    enterActive: navLinksEnterActive,
    enterDone: navLinksEnterDone,
    exitActive: navLinksExitActive,
    exit: navLinksExit,
  };

  return (
    <section className={navigation}>
      {isClientMobile ? (
        <>
          <div className={navigationInnerWrapper}>
            <Burger />
            <Logo />
          </div>
          <CSSTransition
            in={areNavLinksOpen}
            timeout={Number(toL)}
            classNames={navLinksCSSTransitionClassNames}
            mountOnEnter
            unmountOnExit
          >
            <NavLinks />
          </CSSTransition>
        </>
      ) : (
        <div className={navigationInnerWrapper}>
          <Logo />
          <NavLinks />
          <span className={navigationItemRightAlign}>
            <Button content="Resume" link={ResumePdf} target="_blank" />
          </span>
        </div>
      )}
    </section>
  );
}
