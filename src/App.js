import React, { useState } from "react";
import Header from "./Header/Header";
import Veil from "./ubiquitous/components/Veil/Veil";
import useWindowSize from "./ubiquitous/hooks/useWindowSize";
import cx from "classnames";
import styles from "./App.module.scss";

const MOBILE_MAX_WIDTH = 768;

const App = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isMobile = useWindowSize().width < MOBILE_MAX_WIDTH;
  const appClasses = cx(styles.App);
  return (
    <div className={appClasses}>
      <Header
        isMobile={isMobile}
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
      {isMobile && isMobileNavOpen && (
        <Veil
          isMobileNavOpen={isMobileNavOpen}
          setIsMobileNavOpen={setIsMobileNavOpen}
        />
      )}
    </div>
  );
};

export default App;
