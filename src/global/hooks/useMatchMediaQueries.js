import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setIsMobile } from "../slices/clientSlice";

import { bpMpx } from "../styles/config/_breakpoints.scss";

export default function useMatchMediaQueries() {
  const dispatch = useDispatch();
  const handleOnChange = () => dispatch(setIsMobile());

  // Listener for JS to match the css media queries on resize events and initial page load without the need to debounce duplicate calls
  const mediaQuery = window.matchMedia(`(min-width: ${bpMpx})`);

  useEffect(() => {
    // Verify a browser environemt is running the website, otherwise cancel the event listeners                     
    if (typeof window !== "object") {
      return;
    }
    mediaQuery.addEventListener("change", handleOnChange);
    return () => mediaQuery.removeEventListener("change", handleOnChange);
  });
}
