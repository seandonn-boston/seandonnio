import React from "react";
import { useSelector } from "react-redux";

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

export default function Navigation() {
  const areNavLinksOpen = useSelector(selectIsOpen);
  const isClientMobile = useSelector(selectIsMobile);

  return (
    <section className={navigation}>
      {isClientMobile ? (
        <>
          <div className={navigationInnerWrapper}>
            <Burger />
            <Logo />
          </div>
          {areNavLinksOpen && <NavLinks />}
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
