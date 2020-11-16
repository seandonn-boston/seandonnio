import React from "react";

import { errorMsg } from "./ErrorMsg.scss";

export default function ErrorMsg({ children }) {
  return <div className={errorMsg}>{children}</div>;
}
