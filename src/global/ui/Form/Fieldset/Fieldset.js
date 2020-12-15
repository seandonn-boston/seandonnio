import React from "react";

import { fieldset } from "./Fieldset.scss";

export const Fieldset = ({ children }) => (
  <fieldset className={fieldset}>
    {children}
  </fieldset>
);
