import React, { forwardRef } from "react";
import cx from "classnames";

import { input, inputGridItem } from "./Input.scss";

export const Input = forwardRef(
  (
    {
      id = "",
      type,
      name,
      value,
      handleChange,
      placeholder,
      handleClick,
      autoComplete = "on",
      autoCorrect = "on",
      results = -1,
      inputMode = "text",
      isInGrid = false,
    },
    ref
  ) => (
    <input
      className={cx(input, { [inputGridItem]: isInGrid })}
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      onClick={handleClick}
      autoComplete={autoComplete}
      autoCorrect={autoCorrect}
      results={results}
      inputMode={inputMode}
      ref={ref}
    />
  )
);
