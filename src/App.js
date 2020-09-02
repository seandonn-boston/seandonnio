import React, { useState } from "react";
import Header from "./Header/Header";
import Veil from "./ubiquitous/components/Veil/Veil";
import useWindowSize from "./ubiquitous/hooks/useWindowSize";
import { app } from "./App.scss";

const MOBILE_MAX_WIDTH = 768;

const App = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isMobile = useWindowSize().width < MOBILE_MAX_WIDTH;
  return (
    <div className={app}>
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
