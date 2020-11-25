import React, { createContext, useState, useEffect } from "react";

import { bpM, bpMpx } from "../styles/config/_breakpoints.scss";

const { Provider, Consumer: MobileContextConsumer } = createContext();

const MobileContextProvider = ({ children }) => {
  // isClient flag to ensure user is viewing website on a browser
  const isClient = typeof window === "object";

  const [isMobile, setIsMobile] = useState(isClient && window.innerWidth < bpM);

  const handleOnChange = () => setIsMobile(window.innerWidth < bpM);

  useEffect(() => {
    if (!isClient) {
      return;
    }
    // Listener for JS to match the css media queries on resize events and initial page load without the need to debounce duplicate calls
    const mediaQuery = window.matchMedia(`(min-width: ${bpMpx})`);

    mediaQuery.addEventListener("change", handleOnChange);
    return () => mediaQuery.removeEventListener("change", handleOnChange);
  });

  return <Provider value={{ isMobile: isMobile }}>{children}</Provider>;
};

export { MobileContextProvider, MobileContextConsumer };
