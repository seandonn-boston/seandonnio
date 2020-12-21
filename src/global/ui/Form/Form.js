import React from "react";

import { form } from "./Form.scss";

export const Form = ({ handleSubmit, children }) => (
  <form className={form} onSubmit={handleSubmit}>
    {children}
  </form>
);
