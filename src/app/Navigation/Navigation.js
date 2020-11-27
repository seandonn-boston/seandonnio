import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { NavigationItems } from "./NavigationItems/NavigationItems";
import { Logo } from "../Logo/Logo";
import { Burger } from "../../global/ui/Burger/Burger";
import { Button } from "../../global/ui/Button/Button";

import { MobileContext } from "../../global/context/mobileContext";

import {
  selectNavigationItemsIsOpen,
  navigationItemsToggled,
} from "./NavigationItems/navigationItemsSlice";
import { modalToggled } from "../Modal/modalSlice";

import ResumePdf from "../../global/assets/pdf/sean_donnellan_resume.pdf";

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

export const Navigation = () => {
  const dispatch = useDispatch();

  const isNavigationItemsOpen = useSelector(selectNavigationItemsIsOpen);

  const modalPayload = { type: "pdf", file: ResumePdf }; // TODO: Extract to const file

  const { isMobile } = useContext(MobileContext);

  return (
    <section className={navigation}>
      {isMobile ? (
        <>
          <div className={navigationInnerWrapper}>
            <Burger
              onClickHandler={() => dispatch(navigationItemsToggled())}
              isActive={isNavigationItemsOpen}
            />
            <Logo
              onClickHandler={() =>
                isNavigationItemsOpen && dispatch(navigationItemsToggled())
              }
            />
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
          <Logo
            onClickHandler={() =>
              isNavigationItemsOpen && dispatch(navigationItemsToggled())
            }
          />
          <NavigationItems />
          <div className={navigationRightAlign}>
            <Button
              typeAttribute="button"
              handleOnClick={() => {
                dispatch(modalToggled(modalPayload));
              }}
            >
              Resume
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};
