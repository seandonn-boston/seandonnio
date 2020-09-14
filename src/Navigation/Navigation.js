import React from "react";
import PropTypes from "prop-types";
import Burger from "../ubiquitous/ui/Burger/Burger";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Button from "../ubiquitous/ui/Button/Button";
import ResumePdf from "../ubiquitous/assets/pdf/sean_donnellan_resume.pdf";
import {
  navigation,
  navigationInnerWrapper,
  navigationItemRightAlign,
} from "./Navigation.scss";

const Navigation = ({ isMobile, isMobileNavOpen, setIsMobileNavOpen }) => (
  <div className={navigation}>
    {isMobile ? (
      <>
        <div className={navigationInnerWrapper}>
          <Burger handleIsOpen={setIsMobileNavOpen} isOpen={isMobileNavOpen} />
          <Logo />
        </div>
        <Nav isOpen={isMobileNavOpen} />
      </>
    ) : (
      <div className={navigationInnerWrapper}>
        <Logo />
        <Nav />
        <span className={navigationItemRightAlign}>
          <Button content="Resume" link={ResumePdf} target="_blank" />
        </span>
      </div>
    )}
  </div>
);

export default Navigation;

Navigation.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
