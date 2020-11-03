import React from "react";
import { useSelector } from "react-redux";

import NavigationItem from "./NavigationItem/NavigationItem";
import Button from "../../../global/ui/Button/Button";

import { selectIsMobile } from "../../../global/slices/clientSlice";

import { navigationItems } from "./NavigationItems.scss";

export default function NavigationItems() {
  const isClientMobile = useSelector(selectIsMobile);

  // TODO: Abstract array in preparation for hydration via backend
  const routesArray = [
    { to: "/about", name: "About" },
    { to: "/portfolio", name: "Portfolio" },
    { to: "/contact", name: "Contact" },
  ];

  let dynamicNavigationItems = routesArray.map(({ to, name }) => {
    return (
      <NavigationItem key={name} to={to}>
        {name}
      </NavigationItem>
    );
  });

  return (
    <nav className={navigationItems}>
      {dynamicNavigationItems}
      {isClientMobile && (
        // TODO Abstract contants, reference elsewhere
        <Button typeAttribute="button" buttonClickActionType="openResumeModal">
          Resume
        </Button>
      )}
    </nav>
  );
}
