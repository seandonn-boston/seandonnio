import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Line from "./Line/Line";

import { veilOpener, selectVeilIsOpen } from "../../../app/Veil/veilSlice";
import { modalOpener, selectModalIsOpen } from "../../../app/Modal/modalSlice";
import { setModalContent } from "../../../app/Modal/ModalContent/modalContentSlice";

import { x } from "./X.scss";

export default function X() {
  const isVeilOpen = useSelector(selectVeilIsOpen);
  const isModalOpen = useSelector(selectModalIsOpen);

  const dispatch = useDispatch();

  const handleOnClick = () => {
    isVeilOpen && dispatch(veilOpener());
    if (isModalOpen) {
      dispatch(modalOpener());
      dispatch(setModalContent(""));
    }
  };

  return (
    <div className={x} onClick={() => handleOnClick()}>
      <Line />
      <Line reversed />
    </div>
  );
}
