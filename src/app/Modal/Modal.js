import React from "react";
import { useDispatch } from "react-redux";

import { veilOpener } from "../Veil/veilSlice";
import { modalOpener } from "./modalSlice";

import { modal } from "./Modal.scss";

export default function Modal() {
  const content = "hello";

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(veilOpener());
    dispatch(modalOpener());
  };

  return (
    <div className={modal} onClick={() => handleOnClick()}>
      {content}
    </div>
  );
}
