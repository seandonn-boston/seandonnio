import React from "react";

import { errorMsg } from "./errorMsg.scss";

export default function ErrorMsg({ children }) {
  return <div className={errorMsg}>{children}</div>;
}
