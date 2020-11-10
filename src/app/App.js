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
  // TODO: Can useMatchMediaQueries be moved to index.js?
  // perhaps it can be loaded in the store.js file somehow?
  // IMPORTANT: useMatchMediaQueries can, should, and must only be called here once in the entire codebase
  // useMatchMediaQueries initializes window.matchMedia event listener via useEffect, thus tethering mobile conditionals in JS directly to their CSS media queries and their breakpoints. BONUS: you can export scss breakpoint variables and import them in JS
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
