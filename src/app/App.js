import React, { Suspense, lazy, useEffect, useContext } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Navigation } from "./Navigation/Navigation";
import { Modal } from "./Modal/Modal";
import { Veil } from "./Veil/Veil";
import { HomePage } from "../features/HomePage/HomePage";

import { selectVeilIsOpen } from "./Veil/veilSlice";
import { selectModalIsOpen, modalStateUpdated } from "./Modal/modalSlice";
import { navigationItemsToggled } from "./Navigation/NavigationItems/navigationItemsSlice";

import { app } from "./App.scss";

import { ClientContext } from "../global/context/clientContext";

const PortfolioPage = lazy(() =>
  import("../features/PortfolioPage/PortfolioPage")
);
const ContactPage = lazy(() => import("../features/ContactPage/ContactPage"));
const AboutPage = lazy(() => import("../features/AboutPage/AboutPage"));

export const App = () => {
  const dispatch = useDispatch();

  const isVeilOpen = useSelector(selectVeilIsOpen);
  const isModalOpen = useSelector(selectModalIsOpen);

  const { isMobile, isTablet } = useContext(ClientContext);

  // TODO: This is a working solution, but not a correct solution. Still need to find a way to close the modal or navItems upon appropriate resize events if they are already open
  useEffect(() => {
    isMobile && dispatch(navigationItemsToggled());
  }, [isMobile, dispatch]);

  useEffect(() => {
    isTablet && dispatch(modalStateUpdated("conditionalClose"));
  }, [isTablet, dispatch]);

  // TODO: create loading fallback component
  const Loading = <div>Loading...</div>;

  return (
    <HashRouter basename="/">
      <Navigation />
      {isModalOpen && <Modal />}
      {isVeilOpen && <Veil />}
      <section className={app}>
        <Suspense fallback={Loading}>
          <Switch>
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Suspense>
      </section>
    </HashRouter>
  );
};
