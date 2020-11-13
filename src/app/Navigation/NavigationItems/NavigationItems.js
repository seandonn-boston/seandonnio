import React from "react";
import { useSelector, useDispatch } from "react-redux";

import NavigationItem from "./NavigationItem/NavigationItem";
import Button from "../../../global/ui/Button/Button";

import { selectIsMobile } from "../../../global/slices/clientSlice";
import { navigationItemsClosed } from "./navigationItemsSlice";
import { modalOpened } from "../../Modal/modalSlice";

import ResumePdf from "../../../global/assets/pdf/sean_donnellan_resume.pdf";

import { navigationItems } from "./NavigationItems.scss";

export default function NavigationItems() {
  const dispatch = useDispatch();

  const isClientMobile = useSelector(selectIsMobile);

  // TODO: Abstract array in preparation for hydration via backend
  const routesArray = [
    { to: "/about", name: "About" },
    { to: "/portfolio", name: "Portfolio" },
    { to: "/contact", name: "Contact" },
  ];

  let dynamicNavigationItems = routesArray.map(({ to, name }) => {
    return (
      <NavigationItem
        key={name}
        to={to}
        onNavigationItemClick={() => {
          dispatch(navigationItemsClosed());
        }}
      >
        {name}
      </NavigationItem>
    );
  });

  return (
    <nav className={navigationItems}>
      {dynamicNavigationItems}
      {isClientMobile && (
        // TODO Abstract constants, reference elsewhere
        <Button
          typeAttribute="button"
          onButtonClick={() => {
            dispatch(modalOpened({ type: "pdf", file: ResumePdf }));
          }}
        >
          {/* <Button typeAttribute="button" buttonClickActionType="openResumeModal"> */}
          Resume
        </Button>
      )}
    </nav>
  );
}
