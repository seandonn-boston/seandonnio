import React, { createContext, useState, useEffect } from "react";

import { bpM, bpL, bpMpx, bpLpx } from "../styles/config/_breakpoints.scss";

export const ClientContext = createContext();

export const ClientContextProvider = ({ children }) => {
  // isClient flag to ensure user is viewing website on a browser
  const isClient = typeof window === "object";

  const [isMobile, setIsMobile] = useState(isClient && window.innerWidth < bpM);
  const [isTablet, setIsTablet] = useState(
    isClient && window.innerWidth < bpL && window.innerWidth > bpM
  );

  const handleOnChange = () => {
    setIsMobile(window.innerWidth < bpM);
    setIsTablet(window.innerWidth < bpL && window.innerWidth > bpM);
  };

  useEffect(() => {
    if (!isClient) {
      return;
    }
    // Listener for JS to match the css media queries on resize events and initial page load without the need to debounce duplicate calls
    const mediaQueryM = window.matchMedia(`(min-width: ${bpMpx})`);
    const mediaQueryL = window.matchMedia(`(min-width: ${bpLpx})`);

    mediaQueryM.addEventListener("change", handleOnChange);
    mediaQueryL.addEventListener("change", handleOnChange);
    window.addEventListener("orientationchange", handleOnChange);
    return () => {
      mediaQueryM.removeEventListener("change", handleOnChange);
      mediaQueryL.removeEventListener("change", handleOnChange);
      window.removeEventListener("orientationchange", handleOnChange);
    };
  });

  return (
    <ClientContext.Provider value={{ isMobile: isMobile, isTablet: isTablet }}>
      {children}
    </ClientContext.Provider>
  );
};
