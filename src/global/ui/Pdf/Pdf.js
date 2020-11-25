import React from "react";
import PropTypes from "prop-types";

import { ErrorMsg } from "../ErrorMsg/ErrorMsg";

export const Pdf = ({ pdfFile }) => {
  return (
    // TODO: review, will these strings ever change? Should the const be extracted? width and height may need to be props
    <object data={pdfFile} type="application/pdf" width="100%" height="100%">
      <ErrorMsg>
        <p>It appears you don't have a PDF plugin for this browser.</p>
        <p>
          No biggie... you can{" "}
          <a href={pdfFile} target="_blank" rel="noopener noreferrer">
            click here to download the PDF file.
          </a>
        </p>
      </ErrorMsg>
    </object>
  );
};

Pdf.propTypes = {
  pdfFile: PropTypes.string.isRequired,
};
