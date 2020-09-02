import React from "react";
import PropTypes from "prop-types";
import Burger from "../ubiquitous/components/Burger/Burger";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Button from "../ubiquitous/components/Button/Button";
import ResumePdf from "../ubiquitous/assets/pdf/sean_donnellan_resume.pdf";
import {
  header,
  headerInnerWrapper,
  headerItemRightAlign,
} from "./Header.scss";

const Header = ({ isMobile, isMobileNavOpen, setIsMobileNavOpen }) => (
  <div className={header}>
    {isMobile ? (
      <>
        <div className={headerInnerWrapper}>
          <Burger handleIsOpen={setIsMobileNavOpen} isOpen={isMobileNavOpen} />
          <Logo />
        </div>
        <Nav isOpen={isMobileNavOpen} />
      </>
    ) : (
      <div className={headerInnerWrapper}>
        <Logo />
        <Nav />
        <span className={headerItemRightAlign}>
          <Button content="Resume" link={ResumePdf} target="_blank" />
        </span>
      </div>
    )}
  </div>
);

export default Header;

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
