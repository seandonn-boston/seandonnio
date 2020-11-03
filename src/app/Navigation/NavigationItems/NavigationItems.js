import React from "react";
import { useSelector } from "react-redux";

import NavigationItem from "./NavigationItem/NavigationItem";
import Button from "../../../global/ui/Button/Button";

import { selectIsMobile } from "../../../global/slices/clientSlice";

import { navigationItems } from "./NavigationItems.scss";

export default function NavigationItems() {
  const isClientMobile = useSelector(selectIsMobile);

  return (
    <nav className={navigationItems}>
      <NavigationItem to="/about">About</NavigationItem>
      <NavigationItem to="/portfolio">Portfolio</NavigationItem>
      <NavigationItem to="/contact">Contact</NavigationItem>
      {isClientMobile && (
        <Button typeAttribute="button" buttonClickActionType="openResumeModal">
          Resume
        </Button>
      )}
    </nav>
  );
}
