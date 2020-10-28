import React from "react";
import { useSelector } from "react-redux";

import { selectModalContent } from "./modalContentSlice";

import { modalContent, error } from "./ModalContent.scss";

import ResumePdf from "../../../global/assets/pdf/sean_donnellan_resume.pdf";

// Probably best to combine this back into Modal
export default function ModalContent() {
  const modalContentType = useSelector(selectModalContent);

  let content;
  switch (modalContentType) {
    case "pdf":
      content = (
        <object
          data={ResumePdf}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p className={error}>
            {/* TODO Make this a legit error component */}
            It appears you don't have a PDF plugin for this browser.
            <br />
            <br />
            No biggie... you can{" "}
            <a href={ResumePdf}>click here to download the PDF file.</a>
          </p>
        </object>
      );
      break;
    default:
      content = (
        <p className={error}>there was an error loading the modal content</p>
      );
  }

  return <div className={modalContent}>{content}</div>;
}
