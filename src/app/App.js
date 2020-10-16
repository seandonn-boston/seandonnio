import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Navigation from "./Navigation/Navigation";
import Veil from "./Veil/Veil";
import AboutPage from "../features/AboutPage/AboutPage";
import ContactPage from "../features/ContactPage/ContactPage";
import PortfolioPage from "../features/PortfolioPage/PortfolioPage";

import { selectIsOpen } from "./Veil/veilSlice";

import useMatchMediaQueries from "../global/hooks/useMatchMediaQueries";

import { app } from "./App.scss";

export default function App() {
  // useMatchMediaQueries is called here once in the entire app to initialize window.matchMedia event listener (for responsive conditional loading)`
  useMatchMediaQueries();

  const isVeilOpen = useSelector(selectIsOpen);

  return (
    <BrowserRouter>
      <Navigation />
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
        </Switch>
        {isVeilOpen && <Veil />}
      </section>
    </BrowserRouter>
  );
}
