import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectIsClient, setIsMobile } from "../slices/clientSlice";

import { bpMpx } from "../styles/config/_breakpoints.scss";

// useMatchMediaQueries initializes window.matchMedia event listener via useEffect, thus tethering mobile conditionals in JS directly to their CSS media queries and their breakpoints. BONUS: you can export scss breakpoint variables and import them in JS
export default function useMatchMediaQueries() {
  const dispatch = useDispatch();

  const isClient = useSelector(selectIsClient);

  const handleOnChange = () => dispatch(setIsMobile());

  // Verify a browser environemt is running the website, otherwise cancel the event listeners
  useEffect(() => {
    if (!isClient) {
      return;
    }
    const mediaQuery = window.matchMedia(`(min-width: ${bpMpx})`); // Listener for JS to match the css media queries on resize events and initial page load without the need to debounce duplicate calls
    mediaQuery.addEventListener("change", handleOnChange);
    return () => mediaQuery.removeEventListener("change", handleOnChange);
  });
}
