import React from "react";

import { legend } from "./Legend.scss";

export const Legend = ({ title }) => (
  <legend className={legend}>{title}</legend>
);
