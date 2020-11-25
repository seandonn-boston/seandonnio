import React, { Suspense, lazy } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Navigation from "./Navigation/Navigation";
import Veil from "./Veil/Veil";

import { selectVeilIsOpen } from "./Veil/veilSlice";
import { selectModalIsOpen } from "./Modal/modalSlice";

import { app } from "./App.scss";

const Modal = lazy(() => import("./Modal/Modal"));
const PortfolioPage = lazy(() =>
  import("../features/PortfolioPage/PortfolioPage")
);
const ContactPage = lazy(() => import("../features/ContactPage/ContactPage"));
const AboutPage = lazy(() => import("../features/AboutPage/AboutPage"));
const HomePage = lazy(() => import("../features/HomePage/HomePage"));

export default function App() {
  const isVeilOpen = useSelector(selectVeilIsOpen);
  const isModalOpen = useSelector(selectModalIsOpen);

  // TODO: create loading fallback component
  const Loading = <div>Loading...</div>;

  return (
    <HashRouter basename="/">
      <Navigation />
      <Suspense fallback={Loading}>{isModalOpen && <Modal />}</Suspense>
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
}
