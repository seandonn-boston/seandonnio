import React from "react";
import { useSelector } from "react-redux";

import Pdf from "../../global/ui/Pdf/Pdf";
import Error from "../../global/ui/Error/Error";
import X from "../../global/ui/X/X";

import { selectModalContentType, selectModalContentFile } from "./modalSlice";

import { modal } from "./Modal.scss";

export default function Modal() {
  const modalContentType = useSelector(selectModalContentType);
  const modalContentFile = useSelector(selectModalContentFile);

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
    <div className={modal}>
      <X />
      {content}
    </div>
  );
}
