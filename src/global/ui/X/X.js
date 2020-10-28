import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Line from "./Line/Line";

import { veilOpener, selectIsVeilOpen } from "../../../app/Veil/veilSlice";
import { modalOpener, selectIsModalOpen } from "../../../app/Modal/modalSlice";

import { x } from "./X.scss";

export default function X() {
  const dispatch = useDispatch();

  const isVeilOpen = useSelector(selectIsVeilOpen);
  const isModalOpen = useSelector(selectIsModalOpen);

  const handleOnClick = () => {
    isVeilOpen && dispatch(veilOpener());
    isModalOpen && dispatch(modalOpener());
  };
  return (
    <div className={x} onClick={() => handleOnClick()}>
      <Line />
      <Line reversed />
    </div>
  );
}
