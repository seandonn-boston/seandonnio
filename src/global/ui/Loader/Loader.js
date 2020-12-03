import React from "react";

import { loader, loaderIcon } from "./Loader.scss";

export const Loader = () => (
  <div className={loader}>
    <div className={loaderIcon} />
  </div>
);
