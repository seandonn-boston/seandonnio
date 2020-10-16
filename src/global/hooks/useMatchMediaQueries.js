import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setIsMobile } from "../slices/clientSlice";

import { bpMpx } from "../styles/config/_breakpoints.scss";

export default function useMatchMediaQueries() {
  const dispatch = useDispatch();

  const handleOnChange = () => dispatch(setIsMobile());

  const mediaQuery = window.matchMedia(`(min-width: ${bpMpx})`);

  useEffect(() => {
    if (typeof window !== "object") {
      return;
    }
    mediaQuery.addEventListener("change", handleOnChange);
    return () => mediaQuery.removeEventListener("change", handleOnChange);
  });
}
