import React, { createContext, useState, useEffect, useCallback } from "react";

import { bpMpx, bpLpx } from "../styles/config/_breakpoints.scss";

export const ClientContext = createContext();

export const ClientContextProvider = ({ children }) => {
  // ensure user is viewing website on a browser
  const isClient = typeof window === "object";

  // TODO: move to breakpoints css
  const queries = [
    `(min-width: ${bpMpx}) and (max-width: ${bpLpx})`,
    `(min-width: ${bpLpx})`,
  ];

  // Listener for JS to match the css media queries on resize events and initial page load without the need to debounce duplicate calls
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));

  const getValue = useCallback(() => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    switch (index) {
      case 0:
        return "isTablet";
      case 1:
        return "isDesktop";
      default:
        return "isMobile";
    }
  }, [mediaQueryLists]);

  const [value, setValue] = useState(getValue);

  const handleEvent = useCallback(() => setValue(getValue()), [getValue]);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    mediaQueryLists.forEach((mql) =>
      mql.addEventListener("change", handleEvent)
    );
    // Additional orientation listener is required incase breakpoint is tripped but mql change listener is not triggered
    window.addEventListener("orientationchange", handleEvent);
    return () => {
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener("change", handleEvent)
      );
      window.removeEventListener("orientationchange", handleEvent);
    };
  }, [value, handleEvent, isClient, mediaQueryLists]);

  return (
    <ClientContext.Provider
      value={{
        isMobile: value === "isMobile",
        isTablet: value === "isTablet",
        isDesktop: value === "isDesktop",
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
