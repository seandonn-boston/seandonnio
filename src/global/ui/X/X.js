import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Line from "./Line/Line";

import { veilOpener, selectVeilIsOpen } from "../../../app/Veil/veilSlice";
import {
  modalOpener,
  selectModalIsOpen,
  selectModalContentFile,
  setModalContentType,
  setModalContentFile,
} from "../../../app/Modal/modalSlice";

import { x } from "./X.scss";

export default function X() {
  const isVeilOpen = useSelector(selectVeilIsOpen);
  const isModalOpen = useSelector(selectModalIsOpen);
  const modalContentFile = useSelector(selectModalContentFile);

  const dispatch = useDispatch();

  const handleOnClick = () => {
    isVeilOpen && dispatch(veilOpener());
    if (isModalOpen) {
      dispatch(modalOpener());
      dispatch(setModalContentType(""));
      modalContentFile && dispatch(setModalContentFile(null));
    }
  };

  return (
    <div className={x} onClick={() => handleOnClick()}>
      <Line />
      <Line reversed />
    </div>
  );
}
