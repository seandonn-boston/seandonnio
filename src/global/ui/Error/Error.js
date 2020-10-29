import React from "react";

import { error } from "./Error.scss";

export default function Error({ children }) {
  return <div className={error}>{children}</div>;
}
