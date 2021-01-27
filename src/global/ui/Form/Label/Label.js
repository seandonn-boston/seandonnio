import React from "react";
import cx from "classnames";

import { label, labelHidden } from "./Label.scss";

export const Label = ({ htmlFor, title, isHidden }) => (
  <label className={cx(label, { [labelHidden]: isHidden })} htmlFor={htmlFor}>
    {title}
  </label>
);
