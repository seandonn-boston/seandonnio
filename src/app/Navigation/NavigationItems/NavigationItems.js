import React from "react";
import { useSelector } from "react-redux";

import NavigationItem from "./NavigationItem/NavigationItem";
import Link from "../../../global/ui/Link/Link";
import Button from "../../../global/ui/Button/Button";

import { selectIsMobile } from "../../../global/slices/clientSlice";

import ResumePdf from "../../../global/assets/pdf/sean_donnellan_resume.pdf";

import { navigationItems } from "./NavigationItems.scss";

export default function NavigationItems() {
  const isClientMobile = useSelector(selectIsMobile);

  // TODO: Extract to const file
  const routesArray = [
    { to: "/about", name: "About" },
    { to: "/portfolio", name: "Portfolio" },
    { to: "/contact", name: "Contact" },
  ];

  // TODO: Extract to const file
  const modalPayload = { type: "pdf", file: ResumePdf };

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
        <Link href={ResumePdf} target="_blank">
          <Button>Resume</Button>
        </Link>
      )}
    </nav>
  );
}
