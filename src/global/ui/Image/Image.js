// This component is very incomplete, must be vastly expanded but is currently included for testing purposes
import React from "react";

export const Image = ({ handleOnClick, alt, src }) => (
  <img
    alt={alt}
    src={src}
    onClick={() => handleOnClick()}
    width="100%"
    height="100%"
  />
);
