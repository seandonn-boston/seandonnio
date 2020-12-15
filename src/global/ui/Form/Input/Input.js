import React from "react";

import { input } from "./Input.scss";

export const Input = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
  handleClick,
}) => (
  <input
    className={input}
    type={type}
    name={name}
    value={value}
    onChange={handleChange}
    placeholder={placeholder}
    onClick={handleClick}
  />
);
