import React, { useState, useRef, useEffect } from "react";

import { Tag as Selection } from "../Tag/Tag";
import { Select } from "../Form/Select/Select";
import { Label } from "../Form/Label/Label";
import { Input } from "../Form/Input/Input";

import { useOutsideClick } from "../../hooks/useOutsideClick";

import { multiSelectSearch } from "./MultiSelectSearch.scss";

const ENTER_KEY = 13,
  ESCAPE_KEY = 27,
  ARROW_UP_KEY = 38,
  ARROW_DOWN_KEY = 40;

const MULTI_SELECT_SEARCH = "multiSelectSearch";

export const MultiSelectSearch = ({ values, inputPlaceholder }) => {
  const [selectedOptions, setSelectedOptions] = useState(new Set());
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(new Map());
  const [visibleOptions, setVisibleOptions] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const multiSelectSearchRef = useRef(null);
  const inputRef = useRef(null);
  const selectRef = useRef(null);
  const optionRef = useRef(null);

  const onMultiSelectSearchClick = () => {
    inputRef.current.focus();
    if (!isOpen) setIsOpen(true);
  };

  const onMultiSelectSearchKeyDown = (e) => {
    let keysRequiringOneVisibleDropdownOption = [
        ENTER_KEY,
        ARROW_UP_KEY,
        ARROW_DOWN_KEY,
      ],
      keysRequiringMoreThanOneVisibleDropdownOptions = [
        ARROW_UP_KEY,
        ARROW_DOWN_KEY,
      ],
      keyPressed = e.which;
    if (
      (keysRequiringOneVisibleDropdownOption.includes(keyPressed) &&
        visibleOptions === 0) ||
      (keysRequiringMoreThanOneVisibleDropdownOptions.includes(keyPressed) &&
        visibleOptions <= 1)
    )
      return;

    let newOptions = new Map(options),
      newVisibleOptions = visibleOptions - 1,
      foundCurrentActive,
      nextActive,
      firstVisibleOption,
      nextPreviousActive,
      lastVisibleOption,
      selectElement = selectRef.current,
      optionElements = selectRef.current.options,
      activeOptionElement = optionRef.current,
      firstVisibleOptionElement = null,
      nextVisibleOptionElement = null,
      nextActiveElement = null,
      previousVisibleOptionElement = null,
      lastVisibleOptionElement = null,
      index = -1;

    switch (keyPressed) {
      case ENTER_KEY:
        if (!isOpen) {
          setIsOpen(true);
          break;
        }
        let selectedOption,
          newSelectedOptions = new Set(selectedOptions);
        for (let [option, { isActive }] of newOptions) {
          if (
            selectedOptions.has(option) ||
            (inputValue &&
              !option.toLowerCase().includes(inputValue.toLowerCase()))
          )
            continue;
          if (!foundCurrentActive && isActive) {
            foundCurrentActive = true;
            selectedOption = option;
            newOptions.set(option, {
              isActive: false,
            });
          } else if (foundCurrentActive) {
            nextPreviousActive = false;
            newOptions.set(option, { isActive: true });
            break;
          } else nextPreviousActive = option;
        }

        if (nextPreviousActive)
          newOptions.set(nextPreviousActive, { isActive: true });

        newSelectedOptions.add(selectedOption);
        setSelectedOptions(newSelectedOptions);
        setOptions(newOptions);
        setVisibleOptions(newVisibleOptions);
        break;
      case ESCAPE_KEY:
        // TODO: what happens when the dropdown closes and the active element isn't the first key?
        setIsOpen(false);
        break;
      case ARROW_UP_KEY:
        if (!isOpen) break;
        for (let [option, { isActive }] of newOptions) {
          index++;
          if (
            selectedOptions.has(option) ||
            (inputValue &&
              !option.toLowerCase().includes(inputValue.toLowerCase()))
          )
            continue;

          lastVisibleOptionElement = optionElements[index];
          lastVisibleOption = option;
          if (!firstVisibleOptionElement) {
            firstVisibleOptionElement = optionElements[index];
            firstVisibleOption = option;
          }

          if (!foundCurrentActive) {
            if (isActive) {
              foundCurrentActive = true;
              newOptions.set(option, { isActive: false });
            } else {
              nextPreviousActive = option;
              previousVisibleOptionElement = optionElements[index];
            }
          }
        }
        nextPreviousActive = nextPreviousActive
          ? nextPreviousActive
          : lastVisibleOption;
        if (nextPreviousActive)
          newOptions.set(nextPreviousActive, { isActive: true });
        setOptions(newOptions);
        if (firstVisibleOptionElement !== lastVisibleOptionElement) {
          // nextActiveElement is the current elements previous visible sibiling. If there are no previous visible sibilings, and if the current option is the first visible option of the parent, nextActiveElement will wrap to be the last visible option of the parent, otherwise it will be the current option
          nextActiveElement = previousVisibleOptionElement
            ? previousVisibleOptionElement
            : firstVisibleOptionElement === activeOptionElement
            ? lastVisibleOptionElement
            : activeOptionElement;
          // scroll selectElement up such that the current active options sibiling is visible (above current active), unless current active option is first option in the list, and scroll to bottom if active wraps from first to last
          if (
            nextActiveElement &&
            nextActiveElement.getBoundingClientRect().top -
              nextActiveElement.offsetHeight <
              selectElement.getBoundingClientRect().top
          ) {
            selectElement.scrollTop =
              selectElement.scrollTop -
              (previousVisibleOptionElement
                ? previousVisibleOptionElement.clientHeight
                : 0);
          } else if (
            nextActiveElement.getBoundingClientRect().bottom >
            selectElement.getBoundingClientRect().bottom
          ) {
            selectElement.scrollTop = selectElement.scrollHeight;
          }
        }
        break;
      case ARROW_DOWN_KEY:
        if (!isOpen) {
          setIsOpen(true);
          break;
        }
        for (let [option, { isActive }] of newOptions) {
          index++;
          if (
            selectedOptions.has(option) ||
            (inputValue &&
              !option.toLowerCase().includes(inputValue.toLowerCase()))
          )
            continue;

          lastVisibleOptionElement = optionElements[index];
          lastVisibleOption = option;
          if (!firstVisibleOptionElement) {
            firstVisibleOption = option;
            firstVisibleOptionElement = optionElements[index];
          }

          if (!foundCurrentActive && isActive) {
            foundCurrentActive = true;
            newOptions.set(option, { isActive: false });
          } else if (foundCurrentActive && !isActive && !nextActive) {
            nextPreviousActive = false;
            nextActive = option;
            nextVisibleOptionElement = optionElements[index];
            newOptions.set(option, { isActive: true });
          }
        }
        // if there is no nextActive option, wrap to the top of the list and set the firstVisible as active
        if (!nextActive) {
          newOptions.set(firstVisibleOption, { isActive: true });
        }
        setOptions(newOptions);

        if (firstVisibleOptionElement !== lastVisibleOptionElement) {
          // nextActiveElement is the current elements next visible sibiling. If there are no next visible sibilings, and if the current option is the last visible option of the parent, nextActiveElement will wrap to be the first visible option of the parent, otherwise it will be the current option
          nextActiveElement = nextVisibleOptionElement
            ? nextVisibleOptionElement
            : lastVisibleOptionElement === activeOptionElement
            ? firstVisibleOptionElement
            : activeOptionElement;
          // scroll selectElement down such that the next sibiling option is observable beneath the current active options in the selectElement clientRect frame, unless the current active option is last option in the list, then active becomes first visible in the list so scroll to top of the list to show the active item again
          if (nextActiveElement) {
            let nextActiveRect = nextActiveElement.getBoundingClientRect(),
              selectRect = selectElement.getBoundingClientRect();
            if (
              nextActiveRect.bottom +
                (nextVisibleOptionElement
                  ? nextVisibleOptionElement.clientHeight
                  : 0) >
              selectRect.bottom
            ) {
              selectElement.scrollTop = Math.min(
                nextActiveElement.offsetTop -
                  nextActiveRect.height -
                  (nextVisibleOptionElement
                    ? nextVisibleOptionElement.clientHeight
                    : 0) -
                  selectElement.offsetHeight,
                selectElement.scrollHeight
              );
            } else if (nextActiveRect.top < selectRect.top) {
              selectElement.scrollTop = 0;
            }
          }
        }
        break;
      default:
        break;
    }
  };

  const onSelectionClick = (e) => {
    let selection = e.target.dataset.value,
      newSelectedOptions = new Set(selectedOptions),
      newOptions = new Map(options),
      noActiveItems = true;

    for (let isActive of newOptions.values()) {
      if (isActive) {
        noActiveItems = false;
        break;
      }
    }

    if (noActiveItems) newOptions.set(selection, { isActive: true });

    setOptions(newOptions);
    newSelectedOptions.delete(selection);
    setSelectedOptions(newSelectedOptions);
    if (
      !inputValue ||
      selection.toLowerCase().includes(inputValue.toLowerCase())
    )
      setVisibleOptions(visibleOptions + 1);
  };

  const onSelectedOptionsChange = (e) => {
    let selectedOption = e.target.value,
      newSelectedOptions = new Set(selectedOptions),
      newOptions = new Map(options),
      foundCurrentActiveOption,
      foundSelection,
      nextPreviousActiveOption,
      nextActiveOption;
    for (let [option, { isActive }] of newOptions) {
      if (foundCurrentActiveOption && nextActiveOption) break;
      if (
        newSelectedOptions.has(option) ||
        (inputValue && !option.toLowerCase().includes(inputValue.toLowerCase()))
      )
        continue;
      if (isActive && !foundCurrentActiveOption) {
        foundCurrentActiveOption = true;
        newOptions.set(option, { isActive: false });
      }
      if (foundSelection && !nextActiveOption) {
        nextPreviousActiveOption = false;
        nextActiveOption = option;
      } else if (option === selectedOption) foundSelection = true;
      else nextPreviousActiveOption = option;
    }
    nextActiveOption = nextActiveOption
      ? nextActiveOption
      : nextPreviousActiveOption;
    if (nextActiveOption) newOptions.set(nextActiveOption, { isActive: true });
    newSelectedOptions.add(selectedOption);
    setSelectedOptions(newSelectedOptions);
    setOptions(newOptions);
    setVisibleOptions(visibleOptions - 1);
  };

  const onInputChange = (e) => {
    if (!isOpen) setIsOpen(true);
    let value = e.target.value,
      newOptions = new Map(options),
      newVisibleOptions = 0,
      foundNextActive;
    for (let [option, { isActive }] of newOptions) {
      if (isActive) newOptions.set(option, { isActive: false });
      if (
        !selectedOptions.has(option) &&
        !(value && !option.toLowerCase().includes(value.toLowerCase()))
      ) {
        newVisibleOptions++;
        if (!foundNextActive) {
          foundNextActive = true;
          newOptions.set(option, { isActive: true });
        }
      }
    }
    setInputValue(value);
    setVisibleOptions(newVisibleOptions);
    setOptions(newOptions);
  };

  // initialize dropdownOptions Map
  useEffect(() => {
    let initOptions = new Map();
    [...values].forEach((option, i) => {
      initOptions.set(option, {
        isActive: i === 0 ? true : false,
      });
    });
    setOptions(initOptions);
    setVisibleOptions(initOptions.size);
  }, [setOptions, setVisibleOptions, values]);

  useOutsideClick(isOpen, multiSelectSearchRef, () => setIsOpen(false));

  return (
    <div
      className={multiSelectSearch}
      onClick={onMultiSelectSearchClick}
      onKeyDown={onMultiSelectSearchKeyDown}
      ref={multiSelectSearchRef}
    >
      {[...selectedOptions].map((selectedOption, i) => (
        <Selection
          key={i}
          onClickHandler={onSelectionClick}
          data={selectedOption}
        />
      ))}
      <Label title="Search" htmlFor={MULTI_SELECT_SEARCH} isHidden={true} />
      <Input
        id={MULTI_SELECT_SEARCH}
        autoComplete="off"
        autoCorrect="off"
        results={0}
        inputMode="search"
        placeholder={selectedOptions.size === 0 ? inputPlaceholder : ""}
        type="search"
        value={inputValue}
        handleChange={onInputChange}
        ref={inputRef}
      />
      <Select
        selectedOptions={selectedOptions}
        onChangeHandler={onSelectedOptionsChange}
        multiple={true}
        isHidden={!isOpen}
        options={[...options]}
        visibleOptions={visibleOptions}
        inputValue={inputValue}
        optionRef={optionRef}
        ref={selectRef}
      />
    </div>
  );
};
