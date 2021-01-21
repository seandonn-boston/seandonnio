import React, { useState, useReducer, useRef, useEffect } from "react";
import cx from "classnames";

import { DropdownItem } from "./DropdownItem/DropdownItem";
import { Header } from "../../global/ui/Header/Header";
import { Figure } from "../../global/ui/Figure/Figure";
import { Figcaption } from "../../global/ui/Figure/Figcaption/Figcaption";
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
  portfolioPageImages,
} from "./PortfolioPage.scss";

const ENTER_KEY = 13,
  ESCAPE_KEY = 27,
  ARROW_UP_KEY = 38,
  ARROW_DOWN_KEY = 40;

const initImagesState = [
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

let initTagsMap = new Map(),
  tagsSet = new Set([].concat(...initImagesState.map(({ tags }) => tags)));
[...tagsSet].forEach((tag, i) => {
  initTagsMap.set(tag, {
    isSelected: false,
    isFiltered: false,
    isActive: i === 0 ? true : false,
  });
});

export default function PortfolioPage() {
  const imagesReducer = (state) => {
    if (selectedTags.size === 0) {
      return initImagesState;
    }
    return state.map((item) => {
      const isFiltered = !item.tags.some((tag) => selectedTags.has(tag));
      return { ...item, isFiltered };
    });
  };

  const [inputValue, setInputValue] = useState("");
  const [selectedTags, setSelectedTags] = useState(new Set());
  const [dropdownItems, setDropdownItems] = useState(initTagsMap);
  const [isOpen, setIsOpen] = useState(false);
  const [images, dispatchImagesReducer] = useReducer(
    imagesReducer,
    initImagesState
  );

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const dropdownItemRef = useRef(null);

  const onSearchBarClick = () => {
    inputRef.current.focus();
    if (!isOpen) setIsOpen(true);
  };

  const onDropdownItemClick = (e) => {
    let selection = e.target.dataset.value,
      newSelectedTags = new Set(selectedTags),
      newDropdownItems = new Map(dropdownItems),
      nextPreviousActive,
      nextActive,
      foundSelection,
      foundLastActive,
      nextActiveKey;

    newDropdownItems.set(selection, {
      ...newDropdownItems.get(selection),
      isSelected: true,
    });

    for (let [tag, conditions] of newDropdownItems) {
      let { isSelected, isFiltered, isActive } = conditions;
      if (foundLastActive && nextActive) {
        break;
      }
      if (isActive && !foundLastActive) {
        foundLastActive = true;
        newDropdownItems.set(tag, { ...conditions, isActive: false });
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

    nextActiveKey = nextActive ? nextActive : nextPreviousActive;
    if (nextActiveKey) {
      newDropdownItems.set(nextActiveKey, {
        ...newDropdownItems.get(nextActiveKey),
        isActive: true,
      });
    }

    newSelectedTags.add(selection);
    setSelectedTags(newSelectedTags);
    setDropdownItems(newDropdownItems);
  };

  const onSelectedTagClick = (e) => {
    let selection = e.target.dataset.value,
      newSelectedTags = new Set(selectedTags),
      newDropdownItems = new Map(dropdownItems),
      noActiveItems = true,
      nextConditions;

    nextConditions = {
      ...newDropdownItems.get(selection),
      isSelected: false,
    };

    for (let { isActive } of newDropdownItems.values()) {
      if (isActive) {
        noActiveItems = false;
        // exit early - only one instance of an active item is necessary
        break;
      }
    }

    if (noActiveItems) {
      nextConditions = { ...nextConditions, isActive: true };
    }

    if (inputValue) {
      if (!selection.toLowerCase().includes(inputValue.toLowerCase())) {
        nextConditions = { ...nextConditions, isFiltered: true };
      }
    }

    newSelectedTags.delete(selection);
    setSelectedTags(newSelectedTags);
    newDropdownItems.set(selection, nextConditions);
    setDropdownItems(newDropdownItems);
  };

  const onInputChange = (e) => {
    if (!isOpen) setIsOpen(true);

    let value = e.target.value,
      newDropdownItems = new Map(dropdownItems),
      foundNextActive,
      foundLastActive;

    for (let [tag, conditions] of newDropdownItems) {
      let { isSelected, isFiltered, isActive } = conditions,
        matchFound = tag.toLowerCase().includes(value.toLowerCase());
      if (!matchFound && (isFiltered || isSelected)) {
        continue;
      } else if (!matchFound && !isFiltered) {
        let newConditions = { ...conditions, isFiltered: true };
        if (!foundLastActive && isActive) {
          foundLastActive = true;
          newConditions = { ...newConditions, isActive: false };
        }
        newDropdownItems.set(tag, newConditions);
      } else if (matchFound && isFiltered) {
        let newConditions = { ...conditions, isFiltered: false };
        if (!foundNextActive && !isSelected) {
          foundNextActive = true;
          newConditions = { ...newConditions, isActive: true };
        }
        newDropdownItems.set(tag, newConditions);
      } else if (matchFound && !isFiltered) {
        if (!foundLastActive && isActive) {
          foundLastActive = true;
        }
        if (foundNextActive && !isSelected && isActive) {
          newDropdownItems.set(tag, { ...conditions, isActive: false });
        } else if (!foundNextActive && !isSelected) {
          foundNextActive = true;
          if (!isActive) {
            newDropdownItems.set(tag, { ...conditions, isActive: true });
          }
        }
      }
    }

    setInputValue(value);
    setDropdownItems(newDropdownItems);
  };

  const onInputKeyDown = (e) => {
    let keysRequiringOneVisibleDropdownItem = [
        ENTER_KEY,
        ARROW_UP_KEY,
        ARROW_DOWN_KEY,
      ],
      keysRequiringMoreThanOneVisibleDropdownItems = [
        ARROW_UP_KEY,
        ARROW_DOWN_KEY,
      ],
      numOfVisibleDropdownItems = 0;
    for (let { isSelected, isFiltered } of dropdownItems.values()) {
      if (!(isSelected || isFiltered)) {
        ++numOfVisibleDropdownItems;
        if (numOfVisibleDropdownItems > 1) {
          // Exit early - any amount over 2 won't matter
          break;
        }
      }
    }
    // skip if key pressed requires 1 visible item in dropdown while dropdown has 0 visible items, or skip if key pressed requires more than 1 visible item in dropdown while dropdown has 1 or less visible items
    if (
      (keysRequiringOneVisibleDropdownItem.includes(e.which) &&
        numOfVisibleDropdownItems === 0) ||
      (keysRequiringMoreThanOneVisibleDropdownItems.includes(e.which) &&
        numOfVisibleDropdownItems <= 1)
    ) {
      return;
    }

    let newDropdownItems = new Map(dropdownItems),
      nextPreviousActive,
      foundLastActive;

    switch (e.which) {
      case ENTER_KEY:
        let selection = dropdownItemRef.current.dataset.value,
          newSelectedTags = new Set(selectedTags);

        for (let [tag, conditions] of newDropdownItems) {
          let { isSelected, isFiltered, isActive } = conditions;
          if (isSelected || isFiltered) {
            continue;
          } else if (!foundLastActive && isActive) {
            foundLastActive = true;
            newDropdownItems.set(tag, {
              ...conditions,
              isSelected: true,
              isActive: false,
            });
            continue;
          } else if (foundLastActive) {
            nextPreviousActive = false;
            newDropdownItems.set(tag, { ...conditions, isActive: true });
            break;
          } else {
            nextPreviousActive = tag;
          }
        }

        if (nextPreviousActive) {
          newDropdownItems.set(nextPreviousActive, {
            ...newDropdownItems.get(nextPreviousActive),
            isActive: true,
          });
        }

        newSelectedTags.add(selection);
        setSelectedTags(newSelectedTags);
        setDropdownItems(newDropdownItems);
        break;
      case ESCAPE_KEY:
        setIsOpen(false);
        break;
      case ARROW_UP_KEY:
        for (let [tag, conditions] of newDropdownItems) {
          let { isSelected, isFiltered, isActive } = conditions;
          if (isSelected || isFiltered) {
            continue;
          } else if (!foundLastActive && isActive) {
            foundLastActive = true;
            newDropdownItems.set(tag, {
              ...conditions,
              isActive: false,
            });
            if (nextPreviousActive) {
              newDropdownItems.set(nextPreviousActive, {
                ...newDropdownItems.get(nextPreviousActive),
                isActive: true,
              });
              nextPreviousActive = false;
              break;
            } else {
              continue;
            }
          } else {
            nextPreviousActive = tag;
          }
        }

        if (nextPreviousActive) {
          newDropdownItems.set(nextPreviousActive, {
            ...newDropdownItems.get(nextPreviousActive),
            isActive: true,
          });
        }

        setDropdownItems(newDropdownItems);
        break;
      case ARROW_DOWN_KEY:
        for (let [tag, conditions] of newDropdownItems) {
          let { isSelected, isFiltered, isActive } = conditions;
          if (isSelected || isFiltered) {
            continue;
          } else if (!isActive && !foundLastActive && !nextPreviousActive) {
            nextPreviousActive = tag;
            continue;
          } else if (!foundLastActive && isActive) {
            foundLastActive = true;
            newDropdownItems.set(tag, {
              ...conditions,
              isActive: false,
            });
            continue;
          } else if (foundLastActive) {
            nextPreviousActive = false;
            newDropdownItems.set(tag, { ...conditions, isActive: true });
            break;
          }
        }

        if (nextPreviousActive) {
          newDropdownItems.set(nextPreviousActive, {
            ...newDropdownItems.get(nextPreviousActive),
            isActive: true,
          });
        }

        setDropdownItems(newDropdownItems);
        break;
      default:
        break;
    }
  };

  const onOutsideDropdownClick = (e) => {
    if (!dropdownRef.current.contains(e.target)) setIsOpen(false);
  };

  // close dropdown when user clicks somewhere outside of it while its open
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    document.addEventListener("mouseup", onOutsideDropdownClick);
    return () => {
      document.removeEventListener("mouseup", onOutsideDropdownClick);
    };
  }, [isOpen]);

  // filter images when the selected tags change
  useEffect(() => {
    dispatchImagesReducer();
  }, [selectedTags]);

  return (
    <>
      <Header title="Portfolio" />
      <div className={portfolioPageSearchBar} onClick={onSearchBarClick}>
        {[...selectedTags].map((tag, i) => (
          <span
            key={i}
            className={portfolioPageSerachBarSelectedTag}
            onClick={onSelectedTagClick}
            data-value={tag}
          >
            {tag}
          </span>
        ))}
        <input
          placeholder={selectedTags.size === 0 ? "Tags" : ""}
          type="search"
          ref={inputRef}
          value={inputValue}
          className={portfolioPageSearchBarSearchInput}
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
        />
        {isOpen && (
          <div
            className={cx(portfolioPageSearchBarDropdown, {
              [portfolioPageSearchBarDropdownVisible]: isOpen,
            })}
            ref={dropdownRef}
          >
            {[...dropdownItems].map(
              ([tag, { isSelected, isFiltered, isActive }], i) => (
                <DropdownItem
                  ref={isActive ? dropdownItemRef : null}
                  key={i}
                  tag={tag}
                  isSelected={isSelected}
                  isFiltered={isFiltered}
                  isActive={isActive}
                  onClickHandler={onDropdownItemClick}
                />
              )
            )}
          </div>
        )}
      </div>
      <div className={portfolioPageImages}>
        {images.map(({ src, alt, title, description, tags, isFiltered }, i) => (
          <Figure key={i} isHidden={isFiltered} modalSrc={src}>
            <Image alt={alt} src={src} width="100%" />
            <Figcaption title={title} description={description} tags={tags} />
          </Figure>
        ))}
      </div>
    </>
  );
}
