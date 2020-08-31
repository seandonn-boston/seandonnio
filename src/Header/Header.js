import React from "react";
import PropTypes from "prop-types";
import Burger from "../ubiquitous/components/Burger/Burger";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Button from "../ubiquitous/components/Button/Button";
import ResumePdf from "../ubiquitous/assets/pdf/sean_donnellan_resume.pdf";
import cx from "classnames";
import styles from "./Header.module.scss";

const Header = ({ isMobile, isMobileNavOpen, setIsMobileNavOpen }) => {
  console.log(styles);
  const headerClasses = cx(styles.Header);
  const headerInnerWrapperClasses = cx(styles["Header-innerWrapper"]);
  const headerItemRightAlign = cx(styles["Header-item--rightAlign"]);
  return (
    <div className={headerClasses}>
      {isMobile ? (
        <>
          <div className={headerInnerWrapperClasses}>
            <Burger
              handleIsOpen={setIsMobileNavOpen}
              isOpen={isMobileNavOpen}
            />
            <Logo />
          </div>
          <Nav isOpen={isMobileNavOpen} />
        </>
      ) : (
        <div className={headerInnerWrapperClasses}>
          <Logo />
          <Nav />
          <span className={headerItemRightAlign}>
            <Button content="Resume" link={ResumePdf} target="_blank" />
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
