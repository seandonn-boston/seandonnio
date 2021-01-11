import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { Header } from "../../global/ui/Header/Header";

import { modalStateUpdated } from "../../app/Modal/modalSlice";

import { Image } from "../../global/ui/Image/Image";

// TODO: Solve this - lazy load them and consider a backend and AWS for image solutions. An image object would be best to serve
import AdvTypePoster from "../../global/assets/img/adv_typography_poster.gif";
import BlueMythAlbum from "../../global/assets/img/blue_myth_album_front.png";
import BoardPoster from "../../global/assets/img/boards_a.png";
import BoeingAnnualReport from "../../global/assets/img/boeing_annual_report.jpg";
// import DaftPunkMagazineSpread from "../../global/assets/img/daft_punk_magazine_spread.png";
import DarkMatterAlbum from "../../global/assets/img/dark_matter_album_front.png";
import ElectronicAlbumCover from "../../global/assets/img/electronic_album_front.png";
import ExhibitionPoster from "../../global/assets/img/exhibition_poster.gif";
// import FlumeMagazineSpread from "../../global/assets/img/flume_magazine_spread.png";
// import HolyGhostMagazineSpread from "../../global/assets/img/holy_ghost_magazine_spread.png";
import IgnitionPoster from "../../global/assets/img/ignition_gig_poster.jpg";
import InfographicPoster from "../../global/assets/img/infographic_poster.png";
// import LcdSoundsystemMagazineCover from "../../global/assets/img/lcd_soundsystem_magazine_spread.png";
import NewModernMagazineCover from "../../global/assets/img/new_modern_magazine_cover.png";
// import NewModernMagazineTableOfContents from "../../global/assets/img/new_modern_magazine_table_of_contents.png";
import OurMovingWorldPoster from "../../global/assets/img/our_moving_world.jpg";
import RavenGigPoster from "../../global/assets/img/raven_gig_poster.jpg";
import SlcUiConcept from "../../global/assets/img/slc_ui_concept.jpg";
import TwilightPrincessPoster from "../../global/assets/img/twilight_princess_poster.jpg";
import YouthGroupLogo from "../../global/assets/img/youth_group_logo.png";

import {
  portfolioPageSearchBar,
  portfolioPageSerachBarSelectedTag,
  portfolioPageSearchBarSearchInput,
  portfolioPageSearchBarDropdown,
  portfolioPageSearchBarDropdownVisible,
  portfolioPageSearchBarDropdownItem,
  portfolioPageSearchBarDropdownItemActive,
  portfolioPageSearchBarDropdownItemHidden,
  portfolioPageImages,
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

const ENTER_KEY = 13;
const ARROW_UP_KEY = 38;
const ARROW_DOWN_KEY = 40;

const listOfImages = [
  {
    src: AdvTypePoster,
    isFiltered: false,
    alt: "",
    title: "Tomorrow Never Knows",
    description: "A visual guide to the anatomy of type - 2013",
    tags: [
      "Graphic Design",
      "Print",
      "Poster",
      "Infographic",
      "Typography",
      "Educational",
    ],
  },
  {
    src: BlueMythAlbum,
    isFiltered: false,
    alt: "",
    title: "Blue Myth",
    description:
      "A mock album cover for a fake album concept - physical copy exists - 2015",
    tags: ["Graphic Design", "Album Cover", "Educational"],
  },
  {
    src: BoardPoster,
    isFiltered: false,
    alt: "",
    title: "Boards",
    description:
      "A poster series of concpetual product designs for board related sports",
    tags: ["Graphic Design", "Print", "Poster", "Product Design"],
  },
  {
    src: BoeingAnnualReport,
    isFiltered: false,
    alt: "",
    title: "Boeing 2013 Annual Report",
    description:
      "A study in corporate publication design, a 68 page concept for the copy of Boeing's Annual Report, 2013 - physical copy exists - 2014",
    tags: ["Graphic Design", "Print", "Publication", "Educational"],
  },
  {
    src: DarkMatterAlbum,
    isFiltered: false,
    alt: "",
    title: "Dark Matter - Binary Sol",
    description:
      "An album cover design for R&B/Soul duo Binary Sol (Arktkt and Madison McFerrin) - 2016",
    tags: ["Professional", "Album Cover", "Graphic Design"],
  },
  {
    src: ElectronicAlbumCover,
    isFiltered: false,
    alt: "",
    title:
      "Electronic Compositions in Red, Diminished Blue, and Yellow Flat Major - earWorm",
    description:
      "An album cover design for an unreleased project for ambient improvisational group earWorm - 2016",
    tags: ["Professional", "Album Cover", "Graphic Design"],
  },
  {
    src: ExhibitionPoster,
    isFiltered: false,
    alt: "",
    title: "Senior Graphic Design Exhibition and Reception",
    description:
      "An event poster design for RWU's class of 2015 Graphic Design graduates to showcase their final portfolios - 2015",
    tags: ["Graphic Design", "Educational", "Poster", "Print", "Typography"],
  },
  {
    src: IgnitionPoster,
    isFiltered: false,
    alt: "",
    title: "UNHEDMC Presents: Ignition",
    description:
      "A gig poster design for UNH's Electronic Dance Music Club - 2012",
    tags: ["Personal", "Professional", "Graphic Design", "Print", "Poster"],
  },
  {
    src: InfographicPoster,
    isFiltered: false,
    alt: "",
    title: "Wednesday",
    description:
      "A visual guide representing a typical 24 hour cycle of my Wednesday schedule during a semester in school - 2013",
    tags: [
      "Infographic",
      "Graphic Design",
      "Educational",
      "Typography",
      "Poster",
      "Print",
    ],
  },
  {
    src: NewModernMagazineCover,
    isFiltered: false,
    alt: "",
    title: "New Modern Magazine",
    description:
      "A commercial publication design for the fake magazine New Modern. Cover, table of contents, 6 spreads, and a translation to UI Design - physical copy exists. Original articles published by Rolling Stone",
    tags: [
      "Graphic Design",
      "UI Design",
      "Print",
      "Publication",
      "Educational",
    ],
  },
  {
    src: OurMovingWorldPoster,
    isFiltered: false,
    alt: "",
    title: "Our Moving World",
    description:
      "A mixed media poster design advertising a fake photography exhibit of a real artist - Matt Molloy",
    tags: ["Mixed Media", "Graphic Design", "Educational", "Poster", "Print"],
  },
  {
    src: RavenGigPoster,
    isFiltered: false,
    alt: "",
    title: "Rave: N",
    description:
      'Digital artwork created for a local art show - recieved 1st prize. Later adapted as a gig poster for the event "Rave: N" - 2011',
    tags: ["Personal", "Digital Art", "Poster", "Print"],
  },
  {
    src: SlcUiConcept,
    isFiltered: false,
    alt: "",
    title: "Sakkonnet Lobster Company UI",
    description: "A UI design for Sakkonnet Lobster Company",
    tags: ["Educational", "Professional", "UI Design"],
  },
  {
    src: TwilightPrincessPoster,
    isFiltered: false,
    alt: "",
    title: "Twilight Princess Portal",
    description:
      "A poster design inspired by video game The Legend of Zelda: Twilight Princess",
    tags: ["Personal", "Graphic Design", "Poster", "Print"],
  },
  {
    src: YouthGroupLogo,
    isFiltered: false,
    alt: "",
    title: "Youth_____Group",
    description:
      'A logo of a conceptual lifestyle brand. Original greek 2nd century marble sculpture "Fragmentary Colossal Head of a Youth" belongs to the Met Museum - 2018',
    tags: ["Personal", "Graphic Design", "Logo", "Vector"],
  },
];

const getListOfUniqueTags = () => {
  const tagsArr = [];
  listOfImages.map(({ tags }) =>
    tags.forEach((tag) => {
      if (!tagsArr.includes(tag)) {
        tagsArr.push(tag);
      }
    })
  );
  return tagsArr;
};

export default function PortfolioPage() {
  const dispatch = useDispatch();
  const searchBarSearchInputRef = useRef(null);
  const searchBarDropdownItemRef = useRef(null);
  const [searchBarSearchInputValue, setSearchBarSearchInputValue] = useState(
    ""
  );
  const [searchBarSelectedTags, setSearchBarSelectedTags] = useState([]);
  const [searchBarDropdownIsOpen, setSearchBarDropdownIsOpen] = useState(false);
  const [searchBarDropdownItems, setSearchBarDropdownItems] = useState([]);
  const [images, setImages] = useState([]);

  const onSearchBarClick = () => {
    searchBarSearchInputRef.current.focus();
    setSearchBarDropdownIsOpen(true);
  };

  const onSearchBarDropdownItemClick = (e) => {
    const selection = e.target.dataset.value;
    if (!searchBarSelectedTags.includes(selection)) {
      setSearchBarSelectedTags((state) => [...state, selection]);
    }
    const indexOfSelectionInSearchBarDropdownItems = searchBarDropdownItems.findIndex(
      ({ tag }) => tag === selection
    );
    const indexOfLastActiveInSearchBarDropdownItems = searchBarDropdownItems.findIndex(
      ({ isActive }) => isActive
    );
    const newState = [...searchBarDropdownItems];
    newState[indexOfSelectionInSearchBarDropdownItems].isSelected = true;
    if (indexOfLastActiveInSearchBarDropdownItems > -1) {
      newState[indexOfLastActiveInSearchBarDropdownItems].isActive = false;
    }
    let indexOfNextActiveInSearchBarDropdownItems = -1;
    for (
      let i = indexOfSelectionInSearchBarDropdownItems + 1;
      i < searchBarDropdownItems.length &&
      indexOfNextActiveInSearchBarDropdownItems === -1;
      i++
    ) {
      if (
        !searchBarDropdownItems[i].isFiltered &&
        !searchBarDropdownItems[i].isSelected
      ) {
        indexOfNextActiveInSearchBarDropdownItems = i;
      }
    }
    if (!(indexOfNextActiveInSearchBarDropdownItems > -1)) {
      for (
        let i = indexOfSelectionInSearchBarDropdownItems - 1;
        i >= 0 && indexOfNextActiveInSearchBarDropdownItems === -1;
        i--
      ) {
        if (
          !searchBarDropdownItems[i].isFiltered &&
          !searchBarDropdownItems[i].isSelected
        ) {
          indexOfNextActiveInSearchBarDropdownItems = i;
        }
      }
    }
    if (indexOfNextActiveInSearchBarDropdownItems > -1) {
      newState[indexOfNextActiveInSearchBarDropdownItems].isActive = true;
    }
    setSearchBarDropdownItems(newState);
  };

  const onSearchBarSelectedTagClick = (e) => {
    const selection = e.target.dataset.value;
    const indexOfSelectedTag = searchBarSelectedTags.indexOf(selection);
    const newSelectedState = [...searchBarSelectedTags];
    newSelectedState.splice(indexOfSelectedTag, 1);
    setSearchBarSelectedTags(newSelectedState);
    if (searchBarDropdownItems.some(({ tag }) => tag === selection)) {
      const i = searchBarDropdownItems.findIndex(
        ({ tag }) => tag === selection
      );
      const newDropdownState = [...searchBarDropdownItems];
      newDropdownState[i].isSelected = false;
      setSearchBarDropdownItems(newDropdownState);
    }
  };

  const handleSearchBarSearchInputChange = (e) => {
    const value = e.target.value;
    const filteredDropdownItems = searchBarDropdownItems.map((item) => {
      if (!item.tag.toLowerCase().includes(value.toLowerCase())) {
        return { ...item, isFiltered: true };
      } else {
        return { ...item, isFiltered: false };
      }
    });
    const indexOfLastActiveInSearchBarDropdownItems = filteredDropdownItems.findIndex(
      ({ isActive }) => isActive
    );
    if (indexOfLastActiveInSearchBarDropdownItems > -1) {
      filteredDropdownItems[
        indexOfLastActiveInSearchBarDropdownItems
      ].isActive = false;
    }
    let indexOfNextActiveInSearchBarDropdownItems = -1;
    for (
      let i = 0;
      i < filteredDropdownItems.length &&
      indexOfNextActiveInSearchBarDropdownItems === -1;
      i++
    ) {
      if (
        !filteredDropdownItems[i].isFiltered &&
        !filteredDropdownItems[i].isSelected
      ) {
        indexOfNextActiveInSearchBarDropdownItems = i;
      }
    }
    if (indexOfNextActiveInSearchBarDropdownItems > -1) {
      filteredDropdownItems[
        indexOfNextActiveInSearchBarDropdownItems
      ].isActive = true;
    }
    setSearchBarDropdownItems(filteredDropdownItems);
    setSearchBarSearchInputValue(value);
  };

  useEffect(() => {
    if (document.activeElement !== searchBarSearchInputRef.current) {
      setSearchBarDropdownIsOpen(false);
    }
    const acceptableKeys = [ENTER_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY];
    const lengthOfRemainingVisibleItemsInSearchBarDropdown = searchBarDropdownItems.filter(
      ({ isSelected, isFiltered }) => {
        return isSelected === false && isFiltered === false;
      }
    ).length;

    const onKeyDownHandler = (e) => {
      if (
        acceptableKeys.includes(e.which) &&
        lengthOfRemainingVisibleItemsInSearchBarDropdown === 0
      ) {
        return;
      }
      const indexOfActiveItemInSearchBarDropdownItems = searchBarDropdownItems.findIndex(
        ({ isActive }) => isActive
      );
      const newState = [...searchBarDropdownItems];
      let indexOfNextActiveInSearchBarDropdownItems = -1;
      switch (e.which) {
        case ENTER_KEY:
          const selectionOfActiveItem =
            searchBarDropdownItemRef.current.dataset.value;
          if (!searchBarSelectedTags.includes(searchBarDropdownItemRef)) {
            setSearchBarSelectedTags((prev) => [
              ...prev,
              selectionOfActiveItem,
            ]);
          }
          newState[indexOfActiveItemInSearchBarDropdownItems].isSelected = true;
          newState[indexOfActiveItemInSearchBarDropdownItems].isActive = false;
          for (
            let i = indexOfActiveItemInSearchBarDropdownItems + 1;
            i < searchBarDropdownItems.length &&
            indexOfNextActiveInSearchBarDropdownItems === -1;
            i++
          ) {
            if (
              !searchBarDropdownItems[i].isFiltered &&
              !searchBarDropdownItems[i].isSelected
            ) {
              indexOfNextActiveInSearchBarDropdownItems = i;
            }
          }
          if (!(indexOfNextActiveInSearchBarDropdownItems > -1)) {
            for (
              let i = indexOfActiveItemInSearchBarDropdownItems - 1;
              i >= 0 && indexOfNextActiveInSearchBarDropdownItems === -1;
              i--
            ) {
              if (
                !searchBarDropdownItems[i].isFiltered &&
                !searchBarDropdownItems[i].isSelected
              ) {
                indexOfNextActiveInSearchBarDropdownItems = i;
              }
            }
          }
          if (indexOfNextActiveInSearchBarDropdownItems > -1) {
            newState[indexOfNextActiveInSearchBarDropdownItems].isActive = true;
          }
          setSearchBarDropdownItems(newState);
          break;
        case ARROW_UP_KEY:
          newState[indexOfActiveItemInSearchBarDropdownItems].isActive = false;
          for (
            let i = indexOfActiveItemInSearchBarDropdownItems - 1;
            indexOfNextActiveInSearchBarDropdownItems === -1;
            i--
          ) {
            if (i < 0) {
              i = searchBarDropdownItems.length - 1;
            }
            if (
              !searchBarDropdownItems[i].isFiltered &&
              !searchBarDropdownItems[i].isSelected
            ) {
              indexOfNextActiveInSearchBarDropdownItems = i;
            }
          }
          if (indexOfNextActiveInSearchBarDropdownItems > -1) {
            newState[indexOfNextActiveInSearchBarDropdownItems].isActive = true;
          }
          setSearchBarDropdownItems(newState);
          break;
        case ARROW_DOWN_KEY:
          newState[indexOfActiveItemInSearchBarDropdownItems].isActive = false;
          for (
            let i = indexOfActiveItemInSearchBarDropdownItems + 1;
            indexOfNextActiveInSearchBarDropdownItems === -1;
            i++
          ) {
            if (i >= searchBarDropdownItems.length) {
              i = 0;
            }
            if (
              !searchBarDropdownItems[i].isFiltered &&
              !searchBarDropdownItems[i].isSelected
            ) {
              indexOfNextActiveInSearchBarDropdownItems = i;
            }
          }
          if (indexOfNextActiveInSearchBarDropdownItems > -1) {
            newState[indexOfNextActiveInSearchBarDropdownItems].isActive = true;
          }
          setSearchBarDropdownItems(newState);
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", onKeyDownHandler);
    return () => {
      document.removeEventListener("keydown", onKeyDownHandler);
    };
  }, [
    setSearchBarDropdownIsOpen,
    searchBarDropdownItems,
    searchBarSelectedTags,
  ]);

  useEffect(() => {
    setSearchBarDropdownItems(
      getListOfUniqueTags().map((tag, i) => {
        return {
          tag: tag,
          isSelected: false,
          isFiltered: false,
          isActive: i === 0 ? true : false,
        };
      })
    );
    setImages(listOfImages);
  }, [setSearchBarDropdownItems, setImages]);

  return (
    <>
      <Header title="Portfolio" />
      <div className={portfolioPageSearchBar} onClick={onSearchBarClick}>
        {searchBarSelectedTags.map((tag, i) => (
          <span
            key={i}
            className={portfolioPageSerachBarSelectedTag}
            onClick={onSearchBarSelectedTagClick}
            data-value={tag}
          >
            {tag}
          </span>
        ))}
        <input
          placeholder="Search..."
          type="search"
          ref={searchBarSearchInputRef}
          value={searchBarSearchInputValue}
          className={portfolioPageSearchBarSearchInput}
          onChange={handleSearchBarSearchInputChange}
        />
        {searchBarDropdownIsOpen && (
          <div
            className={cx(portfolioPageSearchBarDropdown, {
              [portfolioPageSearchBarDropdownVisible]: searchBarDropdownIsOpen,
            })}
          >
            {searchBarDropdownItems.map(
              ({ tag, isSelected, isFiltered, isActive }, i) => (
                <div
                  key={i}
                  className={cx(portfolioPageSearchBarDropdownItem, {
                    [portfolioPageSearchBarDropdownItemHidden]:
                      isSelected || isFiltered,
                    [portfolioPageSearchBarDropdownItemActive]: isActive,
                  })}
                  data-value={tag}
                  ref={isActive ? searchBarDropdownItemRef : null}
                  onClick={onSearchBarDropdownItemClick}
                >
                  {tag}
                </div>
              )
            )}
          </div>
        )}
      </div>
      <div className={portfolioPageImages}>
        {images.map(({ src, alt, title, description, tags }, i) => (
          <figure
            key={i}
            className={portfolioPageFigure}
            onClick={() =>
              dispatch(modalStateUpdated({ type: "img", file: src }))
            }
          >
            <Image alt={alt} src={src} width="100%" />
            <figcaption className={portfolioPageFigcaption}>
              <h3 className={portfolioPageFigcaptionHeader}>{title}</h3>
              <p className={portfolioPageFigcaptionDescription}>
                {description}
              </p>
              <ul className={portfolioPageFigcaptionTags}>
                {tags.map((tag, i) => (
                  <li key={i} className={portfolioPageFigcaptionTagsTag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
