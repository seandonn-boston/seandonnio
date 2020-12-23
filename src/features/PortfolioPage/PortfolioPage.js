import React from "react";
import { useDispatch } from "react-redux";

import { Header } from "../../global/ui/Header/Header";

import { modalStateUpdated } from "../../app/Modal/modalSlice";

import { Image } from "../../global/ui/Image/Image";

// TODO: Solve this - lazy load them
import AdvTypePoster from "../../global/assets/img/adv_typography_poster.gif";
import BlueMythAlbum from "../../global/assets/img/blue_myth_album_front.png";
import BoardPoster from "../../global/assets/img/boards_a.png";
import BoeingAnnualReport from "../../global/assets/img/boeing_annual_report.jpg";
import DaftPunkMagazineSpread from "../../global/assets/img/daft_punk_magazine_spread.png";
import DarkMatterAlbum from "../../global/assets/img/dark_matter_album_front.png";
import ElectronicAlbumCover from "../../global/assets/img/electronic_album_front.png";
import ExhibitionPoster from "../../global/assets/img/exhibition_poster.gif";
import FlumeMagazineSpread from "../../global/assets/img/flume_magazine_spread.png";
import HolyGhostMagazineSpread from "../../global/assets/img/holy_ghost_magazine_spread.png";
import IgnitionPoster from "../../global/assets/img/ignition_gig_poster.jpg";
import InfographicPoster from "../../global/assets/img/infographic_poster.png";
import LcdSoundsystemMagazineCover from "../../global/assets/img/lcd_soundsystem_magazine_spread.png";
import NewModernMagazineCover from "../../global/assets/img/new_modern_magazine_cover.png";
import NewModernMagazineTableOfContents from "../../global/assets/img/new_modern_magazine_table_of_contents.png";
import OurMovingWorldPoster from "../../global/assets/img/our_moving_world.jpg";
import RavenGigPoster from "../../global/assets/img/raven_gig_poster.jpg";
import SlcUiConcept from "../../global/assets/img/slc_ui_concept.jpg";
import TwilightPrincessPoster from "../../global/assets/img/twilight_princess_poster.jpg";
import YouthGroupLogo from "../../global/assets/img/youth_group_logo.png";

import {
  portfolioPageLayout,
  portfolioPageFigure,
  portfolioPageFigcaption,
  portfolioPageFigcaptionHeader,
  portfolioPageFigcaptionDescription,
  portfolioPageFigcaptionTags,
  portfolioPageFigcaptionTagsTag,
} from "./PortfolioPage.scss";

// Possible Sections - organize categories. Maybe add tags for them? This could be another great usecase for Redux
// Dev;
// Pixels;
// Print;
// Software Engineering;
// Front End;
// Back End;
// Full Stack;
// SPA;
// List various tech used per project - Photoshop + Illustrator / React + SCSS??
// File format?
// Graphic Design;
// UI;
// Albums;
// Logos;
// Publications;
// Posters;
// Art;

const images = [
  {
    src: AdvTypePoster,
    alt: "",
    title:
      "Ok let's try a very long title that might not fit on one line, what happens?",
    description:
      "Let's also get a nice long description, it might be the right thing or the wrong thing who knows but I know it'll work",
    tags: [
      "lets",
      "try",
      "a",
      "bunch",
      "of",
      "different tags",
      "and",
      "see",
      "what",
      "happens",
      "here",
      "too",
    ],
  },
  {
    src: BlueMythAlbum,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: BoardPoster,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: BoeingAnnualReport,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: DaftPunkMagazineSpread,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: DarkMatterAlbum,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: ElectronicAlbumCover,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: ExhibitionPoster,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: FlumeMagazineSpread,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: HolyGhostMagazineSpread,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: IgnitionPoster,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: InfographicPoster,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: LcdSoundsystemMagazineCover,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: NewModernMagazineCover,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: NewModernMagazineTableOfContents,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: OurMovingWorldPoster,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: RavenGigPoster,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: SlcUiConcept,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: TwilightPrincessPoster,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
  {
    src: YouthGroupLogo,
    alt: "",
    title: "Title",
    description: "Description",
    tags: [1, 2, 3],
  },
];

export default function PortfolioPage() {
  const dispatch = useDispatch();

  const portfolioImages = images.map(
    ({ src, alt, title, description, tags }, i) => (
      <figure
        key={i}
        className={portfolioPageFigure}
        onClick={() => dispatch(modalStateUpdated({ type: "img", file: src }))}
      >
        <Image alt={alt} src={src} width="100%" />
        <figcaption className={portfolioPageFigcaption}>
          <h3 className={portfolioPageFigcaptionHeader}>{title}</h3>
          <p className={portfolioPageFigcaptionDescription}>{description}</p>
          <ul className={portfolioPageFigcaptionTags}>
            {tags.map((tag, i) => (
              <li key={i} className={portfolioPageFigcaptionTagsTag}>
                {tag}
              </li>
            ))}
          </ul>
        </figcaption>
      </figure>
    )
  );

  return (
    <>
      <Header title="Portfolio" />
      <div className={portfolioPageLayout}>{portfolioImages}</div>
    </>
  );
}
