import React from "react";

import { modal } from "./Modal.scss";

export default function Modal() {
  const content = "hello";
  return (
    <div className={modal}>
      {/* <X /> */}
      {content}
    </div>
  );
}
