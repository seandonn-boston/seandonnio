import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Button from "../Utilities/Button/Button";
import styles from "./Header.scss";

const Header = () => (
  <div className="Header Header-test">
    <Logo />
    <Nav />
    <Button content="Resume" classes="Button--resume" />
  </div>
);

export default Header;
