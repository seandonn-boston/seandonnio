import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Button from "../Utilities/Button/Button";
import "./Header.scss";

const Header = () => (
  <div className="Header">
    <Logo />
    <Nav />
    <Button content="Resume" classes="Button--resume" />
  </div>
);

export default Header;
