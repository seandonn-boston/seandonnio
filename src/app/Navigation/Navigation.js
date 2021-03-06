import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Link as RouterLink } from "react-router-dom";

import { NavigationItems } from "./NavigationItems/NavigationItems";
import { Logo } from "../../global/ui/Logo/Logo";
import { Burger } from "../../global/ui/Burger/Burger";
import { Button } from "../../global/ui/Button/Button";
import { Link } from "../../global/ui/Link/Link";

import { ClientContext } from "../../global/context/clientContext";

import {
  selectNavigationItemsIsOpen,
  navigationItemsToggled,
} from "./NavigationItems/navigationItemsSlice";
import { modalStateUpdated } from "../Modal/modalSlice";

import ResumePdf from "../../global/assets/pdf/sean_donnellan_resume.pdf";

import {
  navigation,
  navigationInnerWrapper,
  navigationRightAlign,
  navigationLogo,
} from "./Navigation.scss";
import {
  navigationItemsEnter,
  navigationItemsEnterActive,
  navigationItemsEnterDone,
  navigationItemsExitActive,
  navigationItemsExit,
} from "./NavigationItems/NavigationItems.scss";
import { toL } from "../../global/styles/config/_timeouts.scss";

const navigationItemsCSSTransitionClassNames = {
  enter: navigationItemsEnter,
  enterActive: navigationItemsEnterActive,
  enterDone: navigationItemsEnterDone,
  exitActive: navigationItemsExitActive,
  exit: navigationItemsExit,
};

export const Navigation = () => {
  const dispatch = useDispatch();

  const isNavigationItemsOpen = useSelector(selectNavigationItemsIsOpen);

  const modalPayload = { type: "pdf", file: ResumePdf }; // TODO: Extract to const file

  const { isMobile, isTablet } = useContext(ClientContext);

  const NavLinkLogo = (
    <RouterLink
      className={navigationLogo}
      to="/"
      onClick={() =>
        isNavigationItemsOpen && dispatch(navigationItemsToggled())
      }
    >
      <Logo width="50px" height="50px" />
    </RouterLink>
  );

  const NavButtonResume = isTablet ? (
    <Link href={ResumePdf} target="_blank">
      <Button>Resume</Button>
    </Link>
  ) : (
    <Button
      handleOnClick={() => {
        dispatch(modalStateUpdated(modalPayload));
      }}
    >
      Resume
    </Button>
  );

  return (
    <section className={navigation}>
      {isMobile ? (
        <>
          <div className={navigationInnerWrapper}>
            <Burger
              onClickHandler={() => dispatch(navigationItemsToggled())}
              isActive={isNavigationItemsOpen}
            />
            {NavLinkLogo}
          </div>
          <CSSTransition
            in={isNavigationItemsOpen}
            timeout={Number(toL)}
            classNames={navigationItemsCSSTransitionClassNames}
            mountOnEnter
            unmountOnExit
          >
            <NavigationItems />
          </CSSTransition>
        </>
      ) : (
        <div className={navigationInnerWrapper}>
          {NavLinkLogo}
          <NavigationItems />
          <div className={navigationRightAlign}>{NavButtonResume}</div>
        </div>
      )}
    </section>
  );
};
