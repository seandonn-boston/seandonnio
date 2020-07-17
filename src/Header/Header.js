import React from "react";
import Burger from "../ubiquitous/components/Burger/Burger";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Button from "../ubiquitous/components/Button/Button";
import useWindowSize from "../ubiquitous/hooks/useWindowSize";
import "./Header.scss";

const MOBILE_MAX_WIDTH = 768;

const Header = () => {
  const isMobile = useWindowSize().width < MOBILE_MAX_WIDTH;
  return (
    <div className="Header">
      <div className="Header-innerWrapper">
        <Burger />
        <Logo />
        <Nav />
        {!isMobile && (
          <span className="Header-item--rightAlign">
            <Button content="Resume" link="#" />
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
