import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import { Tag as Selection } from "../Tag/Tag";
// import { Dropdown } from "../Dropdown/Dropdown";

import {
  multiSelectSearch,
  multiSelectSearchInput,
} from "./MultiSelectSearch.scss";

import cx from "classnames";
import { dropdown } from "../Dropdown/Dropdown.scss";
import {
  dropdownItem,
  dropdownItemHidden,
  dropdownItemActive,
} from "../Dropdown/DropdownItem/DropdownItem.scss";

const ENTER_KEY = 13,
  ESCAPE_KEY = 27,
  ARROW_UP_KEY = 38,
  ARROW_DOWN_KEY = 40;

export const MultiSelectSearch = ({ values, inputPlaceholder, sideEffect }) => {
  const [selections, setSelections] = useState(new Set());
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOptions, setDropdownOptions] = useState(new Map());

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const dropdownOptionRef = useRef(null);

  const onSearchBarClick = () => {
    inputRef.current.focus();
    if (!isOpen) setIsOpen(true);
  };

  const onSelectionClick = (e) => {
    let selection = e.target.dataset.value,
      newSelections = new Set(selections),
      newDropdownOptions = new Map(dropdownOptions),
      noActiveItems = true,
      selectionConditions;

    selectionConditions = {
      ...newDropdownOptions.get(selection),
      isSelected: false,
    };

    for (let { isActive } of newDropdownOptions.values()) {
      if (isActive) {
        noActiveItems = false;
        // exit early - only one instance of an active item is necessary
        break;
      }
    }

    if (noActiveItems) {
      selectionConditions = { ...selectionConditions, isActive: true };
    }

    if (inputValue) {
      if (!selection.toLowerCase().includes(inputValue.toLowerCase())) {
        selectionConditions = { ...selectionConditions, isFiltered: true };
      }
    }

    newSelections.delete(selection);
    setSelections(newSelections);

    newDropdownOptions.set(selection, selectionConditions);
    setDropdownOptions(newDropdownOptions);
  };

  const onDropdownOptionClick = (e) => {
    let selection = e.target.dataset.value,
      newSelections = new Set(selections),
      newDropdownOptions = new Map(dropdownOptions),
      nextPreviousActive,
      nextActive,
      foundSelection,
      foundLastActive,
      nextActiveKey;

    newDropdownOptions.set(selection, {
      ...newDropdownOptions.get(selection),
      isSelected: true,
    });

    for (let [option, conditions] of newDropdownOptions) {
      let { isSelected, isFiltered, isActive } = conditions;
      if (foundLastActive && nextActive) {
        break;
      }
      if (isActive && !foundLastActive) {
        foundLastActive = true;
        newDropdownOptions.set(option, { ...conditions, isActive: false });
      }
      if (foundSelection) {
        if (!nextActive && !isSelected && !isFiltered) {
          nextActive = option;
        }
      } else if (option === selection) {
        foundSelection = true;
      } else if (!isSelected && !isFiltered) {
        nextPreviousActive = option;
      }
    }

    nextActiveKey = nextActive ? nextActive : nextPreviousActive;
    if (nextActiveKey) {
      newDropdownOptions.set(nextActiveKey, {
        ...newDropdownOptions.get(nextActiveKey),
        isActive: true,
      });
    }

    newSelections.add(selection);
    setSelections(newSelections);
    setDropdownOptions(newDropdownOptions);
  };

  const onInputChange = (e) => {
    if (!isOpen) setIsOpen(true);

    let value = e.target.value,
      newDropdownOptions = new Map(dropdownOptions),
      foundNextActive,
      foundLastActive;

    for (let [option, conditions] of newDropdownOptions) {
      let { isSelected, isFiltered, isActive } = conditions,
        matchFound = option.toLowerCase().includes(value.toLowerCase());
      if (!matchFound && (isFiltered || isSelected)) {
        continue;
      } else if (!matchFound && !isFiltered) {
        let newConditions = { ...conditions, isFiltered: true };
        if (!foundLastActive && isActive) {
          foundLastActive = true;
          newConditions = { ...newConditions, isActive: false };
        }
        newDropdownOptions.set(option, newConditions);
      } else if (matchFound && isFiltered) {
        let newConditions = { ...conditions, isFiltered: false };
        if (!foundNextActive && !isSelected) {
          foundNextActive = true;
          newConditions = { ...newConditions, isActive: true };
        }
        newDropdownOptions.set(option, newConditions);
      } else if (matchFound && !isFiltered) {
        if (!foundLastActive && isActive) {
          foundLastActive = true;
        }
        if (foundNextActive && !isSelected && isActive) {
          newDropdownOptions.set(option, { ...conditions, isActive: false });
        } else if (!foundNextActive && !isSelected) {
          foundNextActive = true;
          if (!isActive) {
            newDropdownOptions.set(option, { ...conditions, isActive: true });
          }
        }
      }
    }

    setInputValue(value);
    setDropdownOptions(newDropdownOptions);
  };

  const onInputKeyDown = (e) => {
    let keysRequiringOneVisibleDropdownOption = [
        ENTER_KEY,
        ARROW_UP_KEY,
        ARROW_DOWN_KEY,
      ],
      keysRequiringMoreThanOneVisibleDropdownOptions = [
        ARROW_UP_KEY,
        ARROW_DOWN_KEY,
      ],
      numOfVisibleDropdownOptions = 0;
    for (let { isSelected, isFiltered } of dropdownOptions.values()) {
      if (!(isSelected || isFiltered)) {
        ++numOfVisibleDropdownOptions;
        if (numOfVisibleDropdownOptions > 1) {
          // Exit early - any amount over 2 won't matter
          break;
        }
      }
    }
    // skip if key pressed requires 1 visible item in dropdown while dropdown has 0 visible items, or skip if key pressed requires more than 1 visible item in dropdown while dropdown has 1 or less visible items
    if (
      (keysRequiringOneVisibleDropdownOption.includes(e.which) &&
        numOfVisibleDropdownOptions === 0) ||
      (keysRequiringMoreThanOneVisibleDropdownOptions.includes(e.which) &&
        numOfVisibleDropdownOptions <= 1)
    ) {
      return;
    }

    let newdropdownOptions = new Map(dropdownOptions),
      nextPreviousActive,
      foundLastActive;

    switch (e.which) {
      case ENTER_KEY:
        let selection = dropdownOptionRef.current.dataset.value,
          newSelections = new Set(selections);

        for (let [option, conditions] of newdropdownOptions) {
          let { isSelected, isFiltered, isActive } = conditions;
          if (isSelected || isFiltered) {
            continue;
          } else if (!foundLastActive && isActive) {
            foundLastActive = true;
            newdropdownOptions.set(option, {
              ...conditions,
              isSelected: true,
              isActive: false,
            });
            continue;
          } else if (foundLastActive) {
            nextPreviousActive = false;
            newdropdownOptions.set(option, { ...conditions, isActive: true });
            break;
          } else {
            nextPreviousActive = option;
          }
        }

        if (nextPreviousActive) {
          newdropdownOptions.set(nextPreviousActive, {
            ...newdropdownOptions.get(nextPreviousActive),
            isActive: true,
          });
        }

        newSelections.add(selection);
        setSelections(newSelections);
        setDropdownOptions(newdropdownOptions);
        break;
      case ESCAPE_KEY:
        setIsOpen(false);
        break;
      case ARROW_UP_KEY:
        for (let [option, conditions] of newdropdownOptions) {
          let { isSelected, isFiltered, isActive } = conditions;
          if (isSelected || isFiltered) {
            continue;
          } else if (!foundLastActive && isActive) {
            foundLastActive = true;
            newdropdownOptions.set(option, {
              ...conditions,
              isActive: false,
            });
            if (nextPreviousActive) {
              newdropdownOptions.set(nextPreviousActive, {
                ...newdropdownOptions.get(nextPreviousActive),
                isActive: true,
              });
              nextPreviousActive = false;
              break;
            } else {
              continue;
            }
          } else {
            nextPreviousActive = option;
          }
        }

        if (nextPreviousActive) {
          newdropdownOptions.set(nextPreviousActive, {
            ...newdropdownOptions.get(nextPreviousActive),
            isActive: true,
          });
        }

        setDropdownOptions(newdropdownOptions);
        break;
      case ARROW_DOWN_KEY:
        for (let [option, conditions] of newdropdownOptions) {
          let { isSelected, isFiltered, isActive } = conditions;
          if (isSelected || isFiltered) continue;
          if (!isActive && !foundLastActive && !nextPreviousActive) {
            nextPreviousActive = option;
          } else if (!foundLastActive && isActive) {
            foundLastActive = true;
            newdropdownOptions.set(option, {
              ...conditions,
              isActive: false,
            });
          } else if (foundLastActive) {
            nextPreviousActive = false;
            newdropdownOptions.set(option, { ...conditions, isActive: true });
            break;
          }
        }

        if (nextPreviousActive) {
          newdropdownOptions.set(nextPreviousActive, {
            ...newdropdownOptions.get(nextPreviousActive),
            isActive: true,
          });
        }

        setDropdownOptions(newdropdownOptions);
        break;
      default:
        break;
    }
  };

  // TODO move to hook?
  const onOutsideDropdownClick = (e) => {
    if (!dropdownRef.current.contains(e.target)) setIsOpen(false);
  };

  // close dropdown when user clicks somewhere outside of it while its open
  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("mouseup", onOutsideDropdownClick);
    return () => {
      document.removeEventListener("mouseup", onOutsideDropdownClick);
    };
  }, [isOpen]);

  // trigger sideEffect when selections change
  useEffect(() => {
    sideEffect();
  }, [selections, sideEffect]);

  // initialize dropdownOptions Map
  useEffect(() => {
    let initDropdownOptions = new Map();
    [...values].forEach((option, i) => {
      initDropdownOptions.set(option, {
        isSelected: false,
        isFiltered: false,
        isActive: i === 0 ? true : false,
      });
    });
    setDropdownOptions(initDropdownOptions);
  }, [setDropdownOptions, values]);

  return (
    <div className={multiSelectSearch} onClick={onSearchBarClick}>
      {[...selections].map((selection, i) => (
        <Selection key={i} onClickHandler={onSelectionClick} data={selection} />
      ))}
      <input
        className={multiSelectSearchInput}
        placeholder={selections.size === 0 ? `${inputPlaceholder}` : ""}
        type="search"
        ref={inputRef}
        value={inputValue}
        onChange={onInputChange}
        onKeyDown={onInputKeyDown}
      />
      {/* {isOpen && (
        <Dropdown
          ref={dropdownRef}
          options={[...dropdownOptions]}
          optionRef={dropdownOptionRef}
          onOptionClickHandler={onDropdownOptionClick}
        />
      )} */}
      {isOpen && (
        <select
          className={dropdown}
          name="multiSelectSearch"
          id="multiSelectSearch"
          multiple
          value={[selections]}
        >
          {[...dropdownOptions].map(([option, conditions], i) => (
            <option
              key={i}
              className={cx(dropdownItem, {
                [dropdownItemHidden]:
                  conditions.isSelected || conditions.isFiltered,
                [dropdownItemActive]: conditions.isActive,
              })}
              onClick={onDropdownOptionClick}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

MultiSelectSearch.propTypes = {
  values: PropTypes.array.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  sideEffect: PropTypes.func,
};

MultiSelectSearch.defaultProps = {
  sideEffect: () => {},
};
