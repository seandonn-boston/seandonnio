// This component is very incomplete, must be vastly expanded but is currently included for testing purposes
import React from "react";

import { image } from "./Image.scss";

export const Image = ({ alt, src, width, height }) => (
  <img className={image} alt={alt} src={src} width={width} height={height} />
);
