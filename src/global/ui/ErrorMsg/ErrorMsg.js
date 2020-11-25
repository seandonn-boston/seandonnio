import React from "react";

import { errorMsg } from "./ErrorMsg.scss";

export const ErrorMsg = ({ children }) => (
  <div className={errorMsg}>{children}</div>
);
