import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import useWindowSize from "./global/hooks/useWindowSize";

import Navigation from './app/Navigation/Navigation'
import Veil from "./global/ui/Veil/Veil";
import AboutPage from "./features/AboutPage/AboutPage"
import Contact from "./features/AboutPage/AboutPage"
import Portfolio from "./features/AboutPage/AboutPage"
import Resume from "./features/AboutPage/AboutPage"

import { app } from "./App.scss";

const MOBILE_MAX_WIDTH = 768;

const App = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isMobile = useWindowSize().width < MOBILE_MAX_WIDTH;
  return (
    <BrowserRouter>
    <Navigation
      isMobile={isMobile}
      isMobileNavOpen={isMobileNavOpen}
      setIsMobileNavOpen={setIsMobileNavOpen}
    />
    <div className={app}>
      <Switch>
        <Route path="/about">
          <AboutPage/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/portfolio">
          <Portfolio/>
        </Route>
        <Route path="/resume">
          <Resume/>
        </Route>
      </Switch>
      {isMobile && isMobileNavOpen && (
        <Veil
          isMobileNavOpen={isMobileNavOpen}
          setIsMobileNavOpen={setIsMobileNavOpen}
        />
      )}
    </div>
    </BrowserRouter>
  );
};

export default App;
