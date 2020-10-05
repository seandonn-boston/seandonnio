import React from "react";
import PropTypes from "prop-types";

import NavigationLinks from "./NavigationLinks/NavigationLinks";
import Logo from "../Logo/Logo";
import Burger from "../../global/ui/Burger/Burger";
import Button from "../../global/ui/Button/Button";

import ResumePdf from "../../global/assets/pdf/sean_donnellan_resume.pdf";

import {
  navigation,
  navigationInnerWrapper,
  navigationItemRightAlign,
} from "./Navigation.scss";

const Navigation = ({ isMobile, isMobileNavOpen, setIsMobileNavOpen }) => (
  <section className={navigation}>
    {isMobile ? (
      <>
        <div className={navigationInnerWrapper}>
          <Burger handleIsOpen={setIsMobileNavOpen} isOpen={isMobileNavOpen} />
          <Logo />
        </div>
        <NavigationLinks isOpen={isMobileNavOpen} />
      </>
    ) : (
      <div className={navigationInnerWrapper}>
        <Logo />
        <NavigationLinks />
        <span className={navigationItemRightAlign}>
          <Button content="Resume" link={ResumePdf} target="_blank" />
        </span>
      </div>
    )}
  </section>
);

export default Navigation;

Navigation.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
