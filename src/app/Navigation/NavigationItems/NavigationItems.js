import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import Link from "../../../global/ui/Link/Link";
import Button from "../../../global/ui/Button/Button";

import ResumePdf from "../../../global/assets/pdf/sean_donnellan_resume.pdf";

import { navigationItems } from "./NavigationItems.scss";

import { MobileContextConsumer } from "../../../global/context/mobile-context";

export default function NavigationItems() {
  // TODO: Extract to const file
  const routesArray = [
    { to: "/about", name: "About" },
    { to: "/portfolio", name: "Portfolio" },
    { to: "/contact", name: "Contact" },
  ];

  const dynamicNavigationItems = routesArray.map(({ to, name }) => {
    return (
      <NavigationItem key={name} to={to}>
        {name}
      </NavigationItem>
    );
  });

  return (
    <MobileContextConsumer>
      {({ isMobile }) => (
        <nav className={navigationItems}>
          {dynamicNavigationItems}
          {isMobile && (
            <Link href={ResumePdf} target="_blank">
              <Button>Resume</Button>
            </Link>
          )}
        </nav>
      )}
    </MobileContextConsumer>
  );
}
