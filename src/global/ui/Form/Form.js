import React from "react";

export const Form = ({ handleSubmit, children }) => (
  <form onSubmit={handleSubmit}>{children}</form>
);
