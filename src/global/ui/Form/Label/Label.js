import React from "react";

import { label } from "./Label.scss";

export const Label = ({ htmlFor, title }) => (
  <label className={label} htmlFor={htmlFor}>
    {title}
  </label>
);
