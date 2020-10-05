import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

// Ensure a web browser is being utilized
const isClient = typeof window === "object";

// Build the object of width and height
const getSize = () => ({
  width: isClient ? window.innerWidth : undefined,
  height: isClient ? window.innerHeight : undefined,
});

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize);

  // Use trailing debounce to limit frequency of effect call, 200ms. return setWindowSize()
  const handleResize = useDebounce(function () {
    setWindowSize(getSize());
  }, 200);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    // Add event listener on resize, trigger handleResize
    window.addEventListener("resize", handleResize);

    // Remove trigger handleResize off of resize listener
    return () => window.removeEventListener("resize", handleResize);
  });

  return windowSize;
}
