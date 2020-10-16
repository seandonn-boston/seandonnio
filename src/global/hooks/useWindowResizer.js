import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setIsMobile } from "../slices/clientSlice";

import useDebouncer from "./useDebouncer";

export default function useWindowResizer() {
  const dispatch = useDispatch();
  const handleResize = useDebouncer(() => dispatch(setIsMobile()), 200);
  useEffect(() => {
    if (typeof window !== "object") {
      return;
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
}
