import React, {
  useState,
  useReducer,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { Header } from "../../global/ui/Header/Header";
import { Image } from "../../global/ui/Image/Image";

import { modalStateUpdated } from "../../app/Modal/modalSlice";

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
  portfolioPageFigureHidden,
  portfolioPageFigcaption,
  portfolioPageFigcaptionHeader,
  portfolioPageFigcaptionDescription,
  portfolioPageFigcaptionTags,
  portfolioPageFigcaptionTagsTag,
} from "./PortfolioPage.scss";

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;
const ARROW_UP_KEY = 38;
const ARROW_DOWN_KEY = 40;

const initialImagesState = [
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

export default function PortfolioPage() {
  const dispatch = useDispatch();

  const imagesReducer = (state) => {
    if (searchBarSelectedTags.size === 0) {
      return initialImagesState;
    }
    return state.map((item) => {
      const isFiltered = !item.tags.some((tag) =>
        searchBarSelectedTags.has(tag)
      );
      return { ...item, isFiltered };
    });
  };

  const [searchBarSearchInputValue, setSearchBarSearchInputValue] = useState(
    ""
  );
  const [searchBarSelectedTags, setSearchBarSelectedTags] = useState(new Set());
  const [searchBarDropdownIsOpen, setSearchBarDropdownIsOpen] = useState(false);
  const [searchBarDropdownItems, setSearchBarDropdownItems] = useState(
    new Map()
  );
  const [images, dispatchImagesReducer] = useReducer(
    imagesReducer,
    initialImagesState
  );

  const searchBarSearchInputRef = useRef(null);
  const searchBarDropdownRef = useRef(null);
  const searchBarDropdownItemRef = useRef(null);

  const onSearchBarClick = () => {
    searchBarSearchInputRef.current.focus();
    setSearchBarDropdownIsOpen(true);
  };

  const findIndexOfNextActiveDropdownItem = useCallback(
    (startingIndex) => {
      let indexOfNextActiveItemInDropdown = -1;
      for (
        let i = startingIndex + 1;
        i < searchBarDropdownItems.size &&
        indexOfNextActiveItemInDropdown === -1;
        i++
      ) {
        if (
          !searchBarDropdownItems[i].isFiltered &&
          !searchBarDropdownItems[i].isSelected
        ) {
          indexOfNextActiveItemInDropdown = i;
        }
      }
      if (indexOfNextActiveItemInDropdown < 0) {
        for (
          let i = startingIndex - 1;
          i >= 0 && indexOfNextActiveItemInDropdown === -1;
          i--
        ) {
          if (
            !searchBarDropdownItems[i].isFiltered &&
            !searchBarDropdownItems[i].isSelected
          ) {
            indexOfNextActiveItemInDropdown = i;
          }
        }
      }
      return indexOfNextActiveItemInDropdown;
    },
    [searchBarDropdownItems]
  );

  const onSearchBarDropdownItemClick = (e) => {
    const selection = e.target.dataset.value;
    const newSelectedTagsSet = new Set(searchBarSelectedTags);
    newSelectedTagsSet.add(selection);
    setSearchBarSelectedTags(newSelectedTagsSet);
    let newDropdownItemsState = new Map(searchBarDropdownItems);
    newDropdownItemsState.set(selection, {
      ...newDropdownItemsState.get(selection),
      isSelected: true,
    });
    let nextPreviousActive, nextActive, foundSelection, foundLastActive;
    for (let [tag, conditions] of newDropdownItemsState) {
      let { isSelected, isFiltered, isActive } = conditions;
      if (foundLastActive && nextActive) {
        break;
      }
      if (isActive && !foundLastActive) {
        foundLastActive = true;
        newDropdownItemsState.set(tag, { ...conditions, isActive: false });
      }
      if (foundSelection) {
        if (!nextActive && !isSelected && !isFiltered) {
          nextActive = tag;
        }
      } else if (tag === selection) {
        foundSelection = true;
      } else if (!isSelected && !isFiltered) {
        nextPreviousActive = tag;
      }
    }
    let nextActiveKey = nextActive ? nextActive : nextPreviousActive;
    if (nextActiveKey) {
      newDropdownItemsState.set(nextActiveKey, {
        ...newDropdownItemsState.get(nextActiveKey),
        isActive: true,
      });
    }
    setSearchBarDropdownItems(newDropdownItemsState);
  };

  const onSearchBarSelectedTagClick = (e) => {
    const selection = e.target.dataset.value;
    let newSelectedTagsSet = new Set(searchBarSelectedTags);
    newSelectedTagsSet.delete(selection);
    setSearchBarSelectedTags(newSelectedTagsSet);
    let newDropdownItemsState = new Map(searchBarDropdownItems);
    let noActiveItems = true;
    for (let { isActive } of newDropdownItemsState.values()) {
      if (isActive) {
        noActiveItems = false;
        break;
      }
    }
    let nextConditions = {
      ...newDropdownItemsState.get(selection),
      isSelected: false,
    };
    if (noActiveItems) {
      nextConditions = { ...nextConditions, isActive: true };
    }
    newDropdownItemsState.set(selection, nextConditions);
    setSearchBarDropdownItems(newDropdownItemsState);
  };

  const handleSearchBarSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchBarSearchInputValue(value);
    let newDropdownItemsState = new Map(searchBarDropdownItems);
    let foundNextActive, foundLastActive;
    for (let [tag, conditions] of newDropdownItemsState) {
      let { isSelected, isFiltered, isActive } = conditions;
      const matchFound = tag.toLowerCase().includes(value.toLowerCase());
      if (!matchFound && !isFiltered) {
        let newConditions = { ...conditions, isFiltered: true };
        if (!foundLastActive && isActive) {
          foundLastActive = true;
          newConditions = { ...newConditions, isActive: false };
        }
        newDropdownItemsState.set(tag, newConditions);
      } else if (matchFound && isFiltered) {
        let newConditions = { ...conditions, isFiltered: false };
        if (!foundNextActive && !isSelected) {
          foundNextActive = true;
          newConditions = { ...newConditions, isActive: true };
        }
        newDropdownItemsState.set(tag, newConditions);
      } else if (matchFound && !isFiltered) {
        if (!foundLastActive && isActive) {
          foundLastActive = true;
        }
        if (foundNextActive && !isSelected && isActive) {
          newDropdownItemsState.set(tag, { ...conditions, isActive: false });
        } else if (!foundNextActive && !isSelected) {
          foundNextActive = true;
          if (!isActive) {
            newDropdownItemsState.set(tag, { ...conditions, isActive: true });
          }
        }
      }
    }
    setSearchBarDropdownItems(newDropdownItemsState);
  };

  // handle filtering images when the selected tags change
  useEffect(() => {
    dispatchImagesReducer();
  }, [searchBarSelectedTags]);

  // handle certain keyboard events for dropdown
  useEffect(() => {
    // skip if search bar is not in focus
    if (document.activeElement !== searchBarSearchInputRef.current) {
      return;
    }

    const onKeyDownHandler = (e) => {
      const keysRequiringVisibleItemsInSearchBarDropdown = [
        ENTER_KEY,
        ARROW_UP_KEY,
        ARROW_DOWN_KEY,
      ];
      const lengthOfRemainingVisibleItemsInSearchBarDropdown = searchBarDropdownItems.filter(
        ({ isSelected, isFiltered }) => {
          return isSelected === false && isFiltered === false;
        }
      ).length;
      // skip if key pressed requires 1 item in dropdown while dropdown has 0 items
      if (
        keysRequiringVisibleItemsInSearchBarDropdown.includes(e.which) &&
        lengthOfRemainingVisibleItemsInSearchBarDropdown === 0
      ) {
        return;
      }
      let newDropdownItemsState = [...searchBarDropdownItems];
      let indexOfActiveItemInSearchBarDropdownItems = -1;
      let indexOfNextActiveItemInDropdown = -1;
      switch (e.which) {
        case ENTER_KEY:
          const selectionOfActiveItem =
            searchBarDropdownItemRef.current.dataset.value;
          const newSelectedTagsSet = new Set(searchBarSelectedTags);
          newSelectedTagsSet.add(selectionOfActiveItem);
          setSearchBarSelectedTags(newSelectedTagsSet);
          newDropdownItemsState = newDropdownItemsState.map((item, i) => {
            let newItem = { ...item };
            if (newItem.isActive) {
              indexOfActiveItemInSearchBarDropdownItems = i;
              newItem = Object.assign({}, newItem, {
                isSelected: true,
                isActive: false,
              });
            }
            return newItem;
          });
          indexOfNextActiveItemInDropdown = findIndexOfNextActiveDropdownItem(
            indexOfActiveItemInSearchBarDropdownItems
          );
          if (indexOfNextActiveItemInDropdown > -1) {
            newDropdownItemsState = newDropdownItemsState.map((item, i) => {
              let newItem = { ...item };
              if (i === indexOfNextActiveItemInDropdown) {
                newItem = Object.assign({}, newItem, { isActive: true });
              }
              return newItem;
            });
          }
          setSearchBarDropdownItems(newDropdownItemsState);
          break;
        case ESCAPE_KEY:
          setSearchBarDropdownIsOpen(false);
          break;
        case ARROW_UP_KEY:
          newDropdownItemsState = newDropdownItemsState.map((item, i) => {
            let newItem = { ...item };
            if (newItem.isActive) {
              indexOfActiveItemInSearchBarDropdownItems = i;
              newItem = Object.assign({}, newItem, { isActive: false });
            }
            return newItem;
          });
          for (
            let i = indexOfActiveItemInSearchBarDropdownItems - 1;
            indexOfNextActiveItemInDropdown === -1;
            i--
          ) {
            if (i < 0) {
              i = searchBarDropdownItems.length - 1;
            }
            if (
              !searchBarDropdownItems[i].isFiltered &&
              !searchBarDropdownItems[i].isSelected
            ) {
              indexOfNextActiveItemInDropdown = i;
            }
          }
          if (indexOfNextActiveItemInDropdown > -1) {
            newDropdownItemsState = newDropdownItemsState.map((item, i) => {
              let newItem = { ...item };
              if (i === indexOfNextActiveItemInDropdown) {
                newItem = Object.assign({}, newItem, { isActive: true });
              }
              return newItem;
            });
          }
          setSearchBarDropdownItems(newDropdownItemsState);
          break;
        case ARROW_DOWN_KEY:
          newDropdownItemsState = newDropdownItemsState.map((item, i) => {
            let newItem = { ...item };
            if (newItem.isActive) {
              indexOfActiveItemInSearchBarDropdownItems = i;
              newItem = Object.assign({}, newItem, { isActive: false });
            }
            return newItem;
          });
          for (
            let i = indexOfActiveItemInSearchBarDropdownItems + 1;
            indexOfNextActiveItemInDropdown === -1;
            i++
          ) {
            if (i >= searchBarDropdownItems.length) {
              i = 0;
            }
            if (
              !searchBarDropdownItems[i].isFiltered &&
              !searchBarDropdownItems[i].isSelected
            ) {
              indexOfNextActiveItemInDropdown = i;
            }
          }
          if (indexOfNextActiveItemInDropdown > -1) {
            newDropdownItemsState = newDropdownItemsState.map((item, i) => {
              let newItem = { ...item };
              if (i === indexOfNextActiveItemInDropdown) {
                newItem = Object.assign({}, newItem, { isActive: true });
              }
              return newItem;
            });
          }
          setSearchBarDropdownItems(newDropdownItemsState);
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", onKeyDownHandler);
    return () => {
      document.removeEventListener("keydown", onKeyDownHandler);
    };
  });

  // handle closing the dropdown on click outside
  useEffect(() => {
    if (!searchBarDropdownIsOpen) {
      return;
    }
    const onClickOutsideHandler = (e) => {
      if (searchBarDropdownRef.current.contains(e.target)) {
        return;
      }
      setSearchBarDropdownIsOpen(false);
    };
    // NOTE mouseup rather than mousedown to seamlessly handle JSX onClick events
    document.addEventListener("mouseup", onClickOutsideHandler);
    return () => {
      document.removeEventListener("mouseup", onClickOutsideHandler);
    };
  }, [searchBarDropdownIsOpen]);

  // handle initializing data on page load
  useEffect(() => {
    const tagsSet = new Set(
      [].concat(...initialImagesState.map(({ tags }) => tags))
    );
    let tagsMap = new Map();
    [...tagsSet].forEach((tag, i) => {
      tagsMap.set(tag, {
        isSelected: false,
        isFiltered: false,
        isActive: i === 0 ? true : false,
      });
    });
    setSearchBarDropdownItems(tagsMap);
  }, [setSearchBarDropdownItems]);

  return (
    <>
      <Header title="Portfolio" />
      <div className={portfolioPageSearchBar} onClick={onSearchBarClick}>
        {[...searchBarSelectedTags].map((tag, i) => (
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
          placeholder={searchBarSelectedTags.size === 0 ? "Tags" : ""}
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
            ref={searchBarDropdownRef}
          >
            {[...searchBarDropdownItems].map(
              ([tag, { isSelected, isFiltered, isActive }]) => (
                <div
                  key={tag}
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
        {images.map(({ src, alt, title, description, tags, isFiltered }, i) => (
          <figure
            key={i}
            className={cx(portfolioPageFigure, {
              [portfolioPageFigureHidden]: isFiltered,
            })}
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
