import React from "react";
import { useSelector } from "react-redux";
import cx from "classnames";

import Pdf from "../../global/ui/Pdf/Pdf";
import Error from "../../global/ui/Error/Error";
import X from "../../global/ui/X/X";

import { selectModalContent } from "./modalSlice";

import { modal, modalResume } from "./Modal.scss";

export default function Modal() {
  const { type: modalContentType, file: modalContentFile } = useSelector(
    selectModalContent
  );

  const modalClasses = cx(modal, { [modalResume]: modalContentType === "pdf" });

  let content;
  switch (modalContentType) {
    case "pdf":
      content = <Pdf pdfFile={modalContentFile} />;
      break;
    default:
      content = (
        <Error>
          <p>There was an error loading the modal content</p>
        </Error>
      );
  }

  return (
    <div className={modalClasses}>
      <X />
      {content}
    </div>
  );
}
