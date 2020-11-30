// This component is very incomplete, must be vastly expanded but is currently included for testing purposes
import React from "react";

import TestImage from "../../assets/img/test_image.jpg";

export const Image = ({ width, height, handleOnClick }) => (
  <img
    src={TestImage}
    width={width}
    height={height}
    onClick={() => handleOnClick()}
  />
);
