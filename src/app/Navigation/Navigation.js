import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import NavLinks from "./NavLinks/NavLinks";
import Logo from "../Logo/Logo";
import Burger from "../../global/ui/Burger/Burger";
import Button from "../../global/ui/Button/Button";

import { selectIsNavLinksOpen } from "./NavLinks/navLinksSlice";
import { selectIsMobile } from "../../global/slices/clientSlice";
import { modalOpener } from "../Modal/modalSlice";
import { veilOpener } from "../Veil/veilSlice";

import {
  navigation,
  navigationInnerWrapper,
  navigationItemRightAlign,
} from "./Navigation.scss";
// NavLink styles are necessary for CSS Animations
import {
  navLinksEnter,
  navLinksEnterActive,
  navLinksEnterDone,
  navLinksExitActive,
  navLinksExit,
} from "./NavLinks/NavLinks.scss";
import { toL } from "../../global/styles/config/_timeouts.scss";

export default function Navigation() {
  const dispatch = useDispatch();

  const isClientMobile = useSelector(selectIsMobile);
  const areNavLinksOpen = useSelector(selectIsNavLinksOpen);

  const navLinksCSSTransitionClassNames = {
    enter: navLinksEnter,
    enterActive: navLinksEnterActive,
    enterDone: navLinksEnterDone,
    exitActive: navLinksExitActive,
    exit: navLinksExit,
  };

  const handleResumeOnClick = () => {
    dispatch(modalOpener());
    dispatch(veilOpener());
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
            <Button
              content="Resume"
              handleOnClick={() => handleResumeOnClick()}
            />
          </span>
        </div>
      )}
    </section>
  );
}
