import React, { forwardRef } from "react";
import cx from "classnames";

import { option, optionHidden, optionHighlight } from "./Option.scss";

export const Option = forwardRef(
  ({ value, isActive, isHidden, disabled, content }, ref) => (
    <option
      className={cx(option, {
        [optionHidden]: isHidden,
        [optionHighlight]: isActive,
      })}
      value={value}
      disabled={disabled}
      ref={ref}
    >
      {content}
    </option>
  )
);
