import React from "react";
import { useSelector } from "react-redux";

import { Header } from "../../global/ui/Header/Header";
import { MultiSelectSearch } from "../../global/ui/MultiSelectSearch/MultiSelectSearch";
import { Figure } from "../../global/ui/Figure/Figure";
import { Image } from "../../global/ui/Image/Image";

import { selectPortfolioImages } from "./portfolioImagesSlice";

import { portfolioPageImagesContainer } from "./PortfolioPage.scss";

export default function PortfolioPage() {
  const portfolioImages = useSelector(selectPortfolioImages);

  return (
    <>
      <Header title="Portfolio" />
      <MultiSelectSearch
        values={
          new Set(
            [].concat(...portfolioImages.map(({ details: { tags } }) => tags))
          )
        }
        inputPlaceholder="Tags..."
      />
      <div className={portfolioPageImagesContainer}>
        {portfolioImages.map(({ src, alt, details, isFiltered }, i) => (
          <Figure
            key={i}
            isHidden={isFiltered}
            modalSrc={src}
            details={details}
          >
            <Image alt={alt} src={src} width="100%" />
          </Figure>
        ))}
      </div>
    </>
  );
}
