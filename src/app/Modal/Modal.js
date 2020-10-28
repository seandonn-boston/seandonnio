import React from "react";

import X from "../../global/ui/X/X";

import { modal, modalContent, pdf, pdfError } from "./Modal.scss";

import ResumePdf from "../../global/assets/pdf/sean_donnellan_resume.pdf";

export default function Modal() {
  const content = (
    <object
      className={pdf}
      data={ResumePdf}
      type="application/pdf"
      width="100%"
      height="100%"
    >
      <p className={pdfError}>
        {/* TODO Make this a legit error component It appears you don't have a */}
        PDF plugin for this browser.
        <br />
        <br />
        No biggie... you can{" "}
        <a href={ResumePdf}>click here to download the PDF file.</a>
      </p>
    </object>
  );

  return (
    <div className={modal}>
      <X />
      <div className={modalContent}>{content}</div>
    </div>
  );
}
