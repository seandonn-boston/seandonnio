import React from "react";

import { textarea } from "./Textarea.scss";

export const Textarea = ({
  type,
  name,
  handleChange,
  value,
  placeholder,
  rows,
  cols,
}) => (
  <textarea
    className={textarea}
    type={type}
    name={name}
    onChange={handleChange}
    value={value}
    placeholder={placeholder}
    rows={rows}
    cols={cols}
  />
);
