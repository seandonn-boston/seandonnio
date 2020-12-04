import React from "react";
import { useDispatch } from "react-redux";

import { modalStateUpdated } from "../../app/Modal/modalSlice";

import { Image } from "../../global/ui/Image/Image";

import YouthGroupLogo from "../../global/assets/img/youth_group_logo.png";

import { portfolioPageCards, portfolioPageCard } from "./PortfolioPage.scss";

export default function PortfolioPage() {
  const dispatch = useDispatch();

  const images = [
  ];

  let uniqueIdCounter = 1;
  const portfolioImages = images.map((image) => (
    <div key={`image-${++uniqueIdCounter}`} className={portfolioPageCard}>
      <Image
        alt={image.alt}
        src={image.src}
        handleOnClick={() =>
          dispatch(modalStateUpdated({ type: "img", file: image.src }))
        }
      />
      <p>{image.alt}</p>
    </div>
  ));

  return (
    <>
      <h1>Portfolio</h1>
      <div className={portfolioPageCards}>{portfolioImages}</div>
    </>
  );
}
