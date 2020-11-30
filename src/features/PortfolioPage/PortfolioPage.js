import React from "react";
import { useDispatch } from "react-redux";

import { modalStateUpdated } from "../../app/Modal/modalSlice";

import { Image } from "../../global/ui/Image/Image";

import TestImage from "../../global/assets/img/test_image.jpg";

export default function PortfolioPage() {
  const dispatch = useDispatch();

  const modalPayload = { type: "img", file: TestImage }; // TODO: Extract to const file

  return (
    <div>
      <p> Portfolio</p>
      <Image
        width={425.6}
        height={283.2}
        handleOnClick={() => dispatch(modalStateUpdated(modalPayload))}
      />
    </div>
  );
}
