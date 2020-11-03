import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import NavigationItems from "./NavigationItems/NavigationItems";
import Logo from "../Logo/Logo";
import Burger from "../../global/ui/Burger/Burger";
import Button from "../../global/ui/Button/Button";

import { selectNavigationItemsIsOpen } from "./NavigationItems/navigationItemsSlice";
import { selectIsMobile } from "../../global/slices/clientSlice";

import {
  navigation,
  navigationInnerWrapper,
  navigationRightAlign,
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

export default function Navigation() {
  const isClientMobile = useSelector(selectIsMobile);
  const isNavigationItemsOpen = useSelector(selectNavigationItemsIsOpen);

  return (
    <section className={navigation}>
      {isClientMobile ? (
        <>
          <div className={navigationInnerWrapper}>
            <Burger />
            <Logo />
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
          <Logo />
          <NavigationItems />
          <div className={navigationRightAlign}>
            <Button
              // TODO: abstract these strings into constants, reference elsewhere
              typeAttribute="button"
              buttonClickActionType="openResumeModal"
            >
              Resume
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
