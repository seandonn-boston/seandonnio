import React, { useContext } from "react";

import { NavigationItem } from "./NavigationItem/NavigationItem";
import { Link } from "../../../global/ui/Link/Link";
import { Button } from "../../../global/ui/Button/Button";

import ResumePdf from "../../../global/assets/pdf/sean_donnellan_resume.pdf";

import { navigationItems } from "./NavigationItems.scss";

import { MobileContext } from "../../../global/context/mobileContext";

export const NavigationItems = () => {
  // TODO: Extract to const file
  const routesArray = [
    { to: "/about", name: "About" },
    { to: "/portfolio", name: "Portfolio" },
    { to: "/contact", name: "Contact" },
  ];

  const { isMobile } = useContext(MobileContext);

  const dynamicNavigationItems = routesArray.map(({ to, name }) => {
    return (
      <NavigationItem key={name} to={to}>
        {name}
      </NavigationItem>
    );
  });

  return (
    <nav className={navigationItems}>
      {dynamicNavigationItems}
      {isMobile && (
        <Link href={ResumePdf} target="_blank">
          <Button>Resume</Button>
        </Link>
      )}
    </nav>
  );
};
