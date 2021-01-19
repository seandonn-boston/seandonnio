import React, { useState, useReducer, useRef, useEffect } from "react";
import cx from "classnames";

import { DropdownItem } from "./DropdownItem/DropdownItem";
import { Header } from "../../global/ui/Header/Header";

import {
  portfolioPageSearchBar,
  portfolioPageSerachBarSelectedTag,
  portfolioPageSearchBarSearchInput,
  portfolioPageSearchBarDropdown,
  portfolioPageSearchBarDropdownVisible,
} from "./PortfolioPage.scss";

const ENTER_KEY = 13,
  ESCAPE_KEY = 27,
  ARROW_UP_KEY = 38,
  ARROW_DOWN_KEY = 40;

let tagsMap = new Map(),
  array10k = Array.from({ length: 10000 });
[...array10k].forEach((_, i) => {
  tagsMap.set(`${i}`, {
    isSelected: false,
    isFiltered: false,
    isActive: i === 0 ? true : false,
  });
});

export default function PortfolioPage() {
  const isOpenReducer = (_, action) => {
    switch (action.type) {
      case "close":
        return false;
      case "open":
        return true;
      default:
        break;
    }
  };

  const [inputValue, setInputValue] = useState("");
  const [selections, setSelections] = useState(new Set());
  const [dropdownItems, setDropdownItems] = useState(tagsMap);
  const [isOpen, dispatchIsOpenReducer] = useReducer(isOpenReducer, false);

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const dropdownItemRef = useRef(null);

  const onSearchBarClick = () => {
    inputRef.current.focus();
    dispatchIsOpenReducer({ type: "open" });
  };

  const onDropdownItemClick = (e) => {
    let selection = e.target.dataset.value,
      newSelections = new Set(selections),
      newDropdownItems = new Map(dropdownItems),
      nextPreviousActive,
      nextActive,
      foundSelection,
      foundLastActive,
      nextActiveKey;

    newSelections.add(selection);
    setSelections(newSelections);

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
    setDropdownItems(newDropdownItems);
  };

  const onSearchBarSelectedTagClick = (e) => {
    let selection = e.target.dataset.value,
      newSelections = new Set(selections),
      newDropdownItems = new Map(dropdownItems),
      noActiveItems = true,
      nextConditions;

    newSelections.delete(selection);
    setSelections(newSelections);

    nextConditions = {
      ...newDropdownItems.get(selection),
      isSelected: false,
    };
    for (let { isActive } of newDropdownItems.values()) {
      if (isActive) {
        noActiveItems = false;
        break;
      }
    }
    if (noActiveItems) {
      nextConditions = { ...nextConditions, isActive: true };
    }

    newDropdownItems.set(selection, nextConditions);
    setDropdownItems(newDropdownItems);
  };

  const handleSearchBarSearchInputChange = (e) => {
    if (!isOpen) {
      dispatchIsOpenReducer({ type: "open" });
    }
    let value = e.target.value,
      newDropdownItems = new Map(dropdownItems),
      foundNextActive,
      foundLastActive;

    setInputValue(value);

    for (let [tag, conditions] of newDropdownItems) {
      let { isSelected, isFiltered, isActive } = conditions;
      const matchFound = tag.toLowerCase().includes(value.toLowerCase());
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
    setDropdownItems(newDropdownItems);
  };

  const handleOnKeyDown = (e) => {
    let keysRequiringOneVisibleItemInDropdown = [
        ENTER_KEY,
        ARROW_UP_KEY,
        ARROW_DOWN_KEY,
      ],
      keysRequiringMoreThanOneVisibleItemsInDropdown = [
        ARROW_UP_KEY,
        ARROW_DOWN_KEY,
      ],
      numOfVisibleItems = 0;

    for (let { isSelected, isFiltered } of dropdownItems.values()) {
      if (!(isSelected || isFiltered)) {
        ++numOfVisibleItems;
        if (numOfVisibleItems > 1) {
          // exit loop early to save time - any value higer than 2 won't matter
          break;
        }
      }
    }
    // skip if key pressed requires 1 visible item in dropdown while dropdown has 0 visible items, or skip if key pressed requires more than 1 visible item in dropdown while dropdown has 1 or less visible items
    if (
      (keysRequiringOneVisibleItemInDropdown.includes(e.which) &&
        numOfVisibleItems === 0) ||
      (keysRequiringMoreThanOneVisibleItemsInDropdown.includes(e.which) &&
        numOfVisibleItems <= 1)
    ) {
      return;
    }

    let newDropdownItems = new Map(dropdownItems),
      nextPreviousActive,
      foundLastActive;
    switch (e.which) {
      case ENTER_KEY:
        let selection = dropdownItemRef.current.dataset.value,
          newSelections = new Set(selections);

        newSelections.add(selection);
        setSelections(newSelections);

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
        setDropdownItems(newDropdownItems);
        break;
      case ESCAPE_KEY:
        dispatchIsOpenReducer({ type: "close" });
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

  // click outside dropdown to close it if open
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const onClickOutsideHandler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        dispatchIsOpenReducer({ type: "close" });
      }
    };
    document.addEventListener("mouseup", onClickOutsideHandler);
    return () => {
      document.removeEventListener("mouseup", onClickOutsideHandler);
    };
  }, [isOpen, dispatchIsOpenReducer]);

  return (
    <>
      <Header title="Portfolio" />
      <div className={portfolioPageSearchBar} onClick={onSearchBarClick}>
        {[...selections].map((tag, i) => (
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
          placeholder={selections.size === 0 ? "Tags" : ""}
          type="search"
          ref={inputRef}
          value={inputValue}
          className={portfolioPageSearchBarSearchInput}
          onChange={handleSearchBarSearchInputChange}
          onKeyDown={handleOnKeyDown}
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
    </>
  );
}
