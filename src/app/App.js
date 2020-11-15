import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navigation from "./Navigation/Navigation";
import Modal from "./Modal/Modal";
import Veil from "./Veil/Veil";
import AboutPage from "../features/AboutPage/AboutPage";
import ContactPage from "../features/ContactPage/ContactPage";
import PortfolioPage from "../features/PortfolioPage/PortfolioPage";
import HomePage from "../features/HomePage/HomePage";
import { selectVeilIsOpen } from "./Veil/veilSlice";
import { selectModalIsOpen } from "./Modal/modalSlice";
import useMatchMediaQueries from "../global/hooks/useMatchMediaQueries";
import { app } from "./App.scss";

export default function App() {
  // IMPORTANT: useMatchMediaQueries can, should, and must only be called here once in the entire codebase. useMatchMediaQueries cannot be abstracted further at this time for it must be called within the react render function, and this is the highest point in the render function stack
  useMatchMediaQueries();

  const isVeilOpen = useSelector(selectVeilIsOpen);
  const isModalOpen = useSelector(selectModalIsOpen);

  return (
    <HashRouter basename="/">
      <Navigation />
      {isModalOpen && <Modal />}
      {isVeilOpen && <Veil />}
      <section className={app}>
        <Switch>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </section>
    </HashRouter>
  );
}
