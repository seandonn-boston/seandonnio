import React, { Suspense, lazy } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Navigation } from "./Navigation/Navigation";
import { Modal } from "./Modal/Modal";
import { Veil } from "./Veil/Veil";
import { Loader } from "../global/ui/Loader/Loader";
import { HomePage } from "../features/HomePage/HomePage";

import { selectVeilIsOpen } from "./Veil/veilSlice";
import { selectModalIsOpen } from "./Modal/modalSlice";

import { app } from "./App.scss";

const PortfolioPage = lazy(() =>
  import("../features/PortfolioPage/PortfolioPage")
);
const ContactPage = lazy(() => import("../features/ContactPage/ContactPage"));
const AboutPage = lazy(() => import("../features/AboutPage/AboutPage"));

export const App = () => {
  const isVeilOpen = useSelector(selectVeilIsOpen);
  const isModalOpen = useSelector(selectModalIsOpen);

  // const fetchSeanDonnBos = () => {
  //   fetch("https://api.github.com/users/seandonn-boston")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   fetchSeanDonnBos();
  //   const interval = setInterval(() => {
  //     fetchSeanDonnBos();
  //   }, 120000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <HashRouter basename="/">
      <Navigation />
      {isModalOpen && <Modal />}
      {isVeilOpen && <Veil />}
      <section className={app}>
        <Suspense fallback={<Loader />}>
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
