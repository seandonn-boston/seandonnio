import React from "react";
import { useDispatch } from "react-redux";

import Line from "./Line/Line";

import { xClicked } from "./xSlice";

import { x } from "./X.scss";

export default function X() {
  const dispatch = useDispatch();

  return (
    <div className={x} onClick={() => dispatch(xClicked())}>
      <Line />
      <Line reversed />
    </div>
  );
}
