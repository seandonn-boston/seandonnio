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
  portfolioPageContainer,
  portfolioPageCard,
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
  { src: AdvTypePoster, alt: "" },
  { src: BlueMythAlbum, alt: "" },
  { src: BoardPoster, alt: "" },
  { src: BoeingAnnualReport, alt: "" },
  { src: DaftPunkMagazineSpread, alt: "" },
  { src: DarkMatterAlbum, alt: "" },
  { src: ElectronicAlbumCover, alt: "" },
  { src: ExhibitionPoster, alt: "" },
  { src: FlumeMagazineSpread, alt: "" },
  { src: HolyGhostMagazineSpread, alt: "" },
  { src: IgnitionPoster, alt: "" },
  { src: InfographicPoster, alt: "" },
  { src: LcdSoundsystemMagazineCover, alt: "" },
  { src: NewModernMagazineCover, alt: "" },
  { src: NewModernMagazineTableOfContents, alt: "" },
  { src: OurMovingWorldPoster, alt: "" },
  { src: RavenGigPoster, alt: "" },
  { src: SlcUiConcept, alt: "" },
  { src: TwilightPrincessPoster, alt: "" },
  { src: YouthGroupLogo, alt: "" },
];

export default function PortfolioPage() {
  const dispatch = useDispatch();

  const portfolioImages = images.map((image, i) => (
    <div key={i} className={portfolioPageCard}>
      <Image
        alt={image.alt}
        src={image.src}
        handleOnClick={() =>
          dispatch(modalStateUpdated({ type: "img", file: image.src }))
        }
        width="100%"
        height="100%"
      />
    </div>
  ));

  return (
    <>
      <Header title="Portfolio" />
      <div className={portfolioPageContainer}>{portfolioImages}</div>
    </>
  );
}
