import React, { useState } from "react";
import Burger from "../ubiquitous/components/Burger/Burger";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Button from "../ubiquitous/components/Button/Button";
import useWindowSize from "../ubiquitous/hooks/useWindowSize";
import "./Header.scss";

const MOBILE_MAX_WIDTH = 768;

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isMobile = useWindowSize().width < MOBILE_MAX_WIDTH;
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
