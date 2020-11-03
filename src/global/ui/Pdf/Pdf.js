import React from "react";
import PropTypes from "prop-types";

import Error from "../Error/Error";

export default function Pdf({ pdfFile }) {
  return (
    // TODO: review, will these strings ever change? width and height may need to be props
    <object data={pdfFile} type="application/pdf" width="100%" height="100%">
      <Error>
        <p>It appears you don't have a PDF plugin for this browser.</p>
        <p>
          No biggie... you can{" "}
          <a href={pdfFile}>click here to download the PDF file.</a>
        </p>
      </Error>
    </object>
  );
}

Pdf.propTypes = {
  pdfFile: PropTypes.string.isRequired,
};
