import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";

import { Pdf } from "../../global/ui/Pdf/Pdf";
import { Image } from "../../global/ui/Image/Image";
import { ErrorMsg } from "../../global/ui/ErrorMsg/ErrorMsg";
import { X } from "../../global/ui/X/X";

import { selectModalContent, modalStateUpdated } from "./modalSlice";

import { modal, modalPdf } from "./Modal.scss";

export const Modal = () => {
  const dispatch = useDispatch();

  const { type: modalContentType, file: modalContentFile } = useSelector(
    selectModalContent
  );

  const modalClasses = cx(modal, {
    [modalPdf]: modalContentType === "pdf",
  });

  let content;
  switch (modalContentType) {
    case "pdf":
      content = <Pdf pdfFile={modalContentFile} />;
      break;
    case "img":
      content = (
        <Image
          src={modalContentFile}
          alt="Modal Imag\"
          handleOnClick={() => {}}
          width="100%"
          height="100%"
        />
      );
      break;
    default:
      content = (
        <ErrorMsg>
          <p>There was an error loading the modal content</p>
        </ErrorMsg>
      );
  }

  return (
    <div className={modalClasses}>
      <X handleOnClick={() => dispatch(modalStateUpdated())} />
      {content}
    </div>
  );
};
