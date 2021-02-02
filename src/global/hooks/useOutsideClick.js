import { useEffect } from "react";

export const useOutsideClick = (isOpen, ref, callback) => {
  const handleClick = (e) => {
    if (!ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  });
};
