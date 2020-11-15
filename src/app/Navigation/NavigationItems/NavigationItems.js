import React from "react";
import { useSelector, useDispatch } from "react-redux";

import NavigationItem from "./NavigationItem/NavigationItem";
import Button from "../../../global/ui/Button/Button";

import { selectIsMobile } from "../../../global/slices/clientSlice";
import { modalOpened } from "../../Modal/modalSlice";

import ResumePdf from "../../../global/assets/pdf/sean_donnellan_resume.pdf";

import { navigationItems } from "./NavigationItems.scss";

export default function NavigationItems() {
  const dispatch = useDispatch();

  const isClientMobile = useSelector(selectIsMobile);

  const routesArray = [
    { to: "/about", name: "About" },
    { to: "/portfolio", name: "Portfolio" },
    { to: "/contact", name: "Contact" },
  ]; // TODO: Extract to const file

  const modalPayload = { type: "pdf", file: ResumePdf }; // TODO: Extract to const file

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
        <Button
          typeAttribute="button"
          handleOnClick={() => {
            dispatch(modalOpened(modalPayload));
          }}
        >
          Resume
        </Button>
      )}
    </nav>
  );
}
