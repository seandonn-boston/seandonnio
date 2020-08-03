import React from "react";
import PropTypes from "prop-types";
import Burger from "../ubiquitous/components/Burger/Burger";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Button from "../ubiquitous/components/Button/Button";
import "./Header.scss";

const Header = ({ isMobile, isMobileNavOpen, setIsMobileNavOpen }) => {
  return (
    <div className="Header">
      {isMobile ? (
        <>
          <div className="Header-innerWrapper">
            <Burger
              handleIsOpen={setIsMobileNavOpen}
              isOpen={isMobileNavOpen}
            />
            <Logo />
          </div>
          <Nav isOpen={isMobileNavOpen} />
        </>
      ) : (
        <div className="Header-innerWrapper">
          <Logo />
          <Nav />
          <span className="Header-item--rightAlign">
            <Button content="Resume" link="#" />
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
