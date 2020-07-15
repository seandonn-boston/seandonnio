import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Button from "../ubiquitous/Components/Button/Button";
import "./Header.scss";

const Header = () => (
  <div className="Header">
    <div className="Header-innerWrapper">
      <Logo />
      <Nav />
      <span className="Header-item--rightAlign">
        <Button content="Resume" />
      </span>
    </div>
  </div>
);

export default Header;