import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import NavLinks from "./NavLinks/NavLinks";
import Logo from "../Logo/Logo";
import Burger from "../../global/ui/Burger/Burger";
import Button from "../../global/ui/Button/Button";

import { selectNavLinksIsOpen } from "./NavLinks/navLinksSlice";
import { selectIsMobile } from "../../global/slices/clientSlice";
import {
  modalOpener,
  selectModalIsOpen,
  setModalContentType,
  setModalContentFile,
} from "../Modal/modalSlice";
import { veilOpener, selectVeilIsOpen } from "../Veil/veilSlice";

import {
  navigation,
  navigationInnerWrapper,
  navigationItemRightAlign,
} from "./Navigation.scss";
// NavLink styles and timeout constant are both necessary here for CSS Animations
import {
  navLinksEnter,
  navLinksEnterActive,
  navLinksEnterDone,
  navLinksExitActive,
  navLinksExit,
} from "./NavLinks/NavLinks.scss";
import { toL } from "../../global/styles/config/_timeouts.scss";

import ResumePdf from "../../global/assets/pdf/sean_donnellan_resume.pdf";

const navLinksCSSTransitionClassNames = {
  enter: navLinksEnter,
  enterActive: navLinksEnterActive,
  enterDone: navLinksEnterDone,
  exitActive: navLinksExitActive,
  exit: navLinksExit,
};

export default function Navigation() {
  const isClientMobile = useSelector(selectIsMobile);
  const areNavLinksOpen = useSelector(selectNavLinksIsOpen);
  const isVeilOpen = useSelector(selectVeilIsOpen);
  const isModalOpen = useSelector(selectModalIsOpen);

  const dispatch = useDispatch();

  const handleResumeOnClick = () => {
    dispatch(setModalContentType("pdf"));
    dispatch(setModalContentFile(ResumePdf));
    !isModalOpen && dispatch(modalOpener());
    !isVeilOpen && dispatch(veilOpener());
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
