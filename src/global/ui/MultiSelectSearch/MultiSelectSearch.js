import React, { useState, useRef, useEffect } from "react";

import { Tag as Selection } from "../Tag/Tag";
import { Select } from "../Form/Select/Select";
import { Label } from "../Form/Label/Label";
import { Input } from "../Form/Input/Input";

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
      nextPreviousActive,
      foundLastActive,
      selectElement = selectRef.current,
      nextActiveElement;

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

          if (!foundLastActive && isActive) {
            foundLastActive = true;
            selectedOption = option;
            newOptions.set(option, {
              isActive: false,
            });
          } else if (foundLastActive) {
            nextPreviousActive = false;
            newOptions.set(option, { isActive: true });
            break;
          } else {
            nextPreviousActive = option;
          }
        }

        if (nextPreviousActive) {
          newOptions.set(nextPreviousActive, {
            isActive: true,
          });
        }

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
          if (
            selectedOptions.has(option) ||
            (inputValue &&
              !option.toLowerCase().includes(inputValue.toLowerCase()))
          )
            continue;
          if (!foundLastActive && isActive) {
            foundLastActive = true;
            newOptions.set(option, {
              isActive: false,
            });
            if (nextPreviousActive) break;
          } else nextPreviousActive = option;
        }
        if (nextPreviousActive)
          newOptions.set(nextPreviousActive, {
            isActive: true,
          });
        // TODO: solve for firstVisibleChild and lastVisibleChild
        // nextActiveElement is the current elements previous sibiling. If there is no previous sibiling, and if the current option is the first visible option of the parent, nextActiveElement will wrap to be the last visible option of the parent, otherwise it will be the current option
        if (optionRef.current.previousElementSibling) {
          nextActiveElement = optionRef.current.previousElementSibling;
        } else if (selectElement.firstChild === optionRef.current) {
          nextActiveElement = selectElement.lastChild;
        } else {
          nextActiveElement = optionRef.current;
        }
        // scroll selectElement down such that the next option remains visible beneath current active option, unless current active option is last option in the list, and scroll to top if active element wraps from last to first
        if (
          nextActiveElement.getBoundingClientRect().top -
            nextActiveElement.offsetHeight <
          selectElement.getBoundingClientRect().top
        ) {
          selectElement.scrollTop =
            selectElement.scrollTop -
            (nextActiveElement.previousElementSibling
              ? nextActiveElement.previousElementSibling.clientHeight
              : 0);
        } else if (
          nextActiveElement.getBoundingClientRect().bottom >
          selectElement.getBoundingClientRect().bottom
        ) {
          selectElement.scrollTop = selectElement.scrollHeight;
        }
        setOptions(newOptions);
        break;
      case ARROW_DOWN_KEY:
        if (!isOpen) {
          setIsOpen(true);
          break;
        }
        for (let [option, { isActive }] of newOptions) {
          if (
            selectedOptions.has(option) ||
            (inputValue &&
              !option.toLowerCase().includes(inputValue.toLowerCase()))
          )
            continue;
          if (!isActive && !foundLastActive && !nextPreviousActive) {
            nextPreviousActive = option;
          } else if (!foundLastActive && isActive) {
            foundLastActive = true;
            newOptions.set(option, {
              isActive: false,
            });
          } else if (foundLastActive) {
            nextPreviousActive = false;
            newOptions.set(option, { isActive: true });
            break;
          }
        }
        if (nextPreviousActive)
          newOptions.set(nextPreviousActive, {
            isActive: true,
          });
        // TODO: solve for firstVisibleChild and lastVisibleChild
        if (optionRef.current.nextElementSibling) {
          nextActiveElement = optionRef.current.nextElementSibling;
        } else if (selectElement.lastChild === optionRef.current) {
          nextActiveElement = selectElement.firstChild;
        } else {
          nextActiveElement = optionRef.current;
        }
        // scroll selectElement up such that the previous option remains visible above current active option, unless current active option is first option in the list, and scroll to bottom if active wraps from first to last
        if (
          nextActiveElement.getBoundingClientRect().bottom +
            (nextActiveElement.nextElementSibling
              ? nextActiveElement.nextElementSibling.clientHeight
              : 0) >
          selectElement.getBoundingClientRect().bottom
        ) {
          selectElement.scrollTop = Math.min(
            nextActiveElement.offsetTop -
              nextActiveElement.clientHeight -
              (nextActiveElement.nextElementSibling
                ? nextActiveElement.nextElementSibling.clientHeight
                : 0) -
              selectElement.offsetHeight,
            selectElement.scrollHeight
          );
        } else if (
          nextActiveElement.getBoundingClientRect().top <
          selectElement.getBoundingClientRect().top
        ) {
          selectElement.scrollTop = 0;
        }
        setOptions(newOptions);
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
      foundLastActiveOption,
      foundSelection,
      nextPreviousActiveOption,
      nextActiveOption;
    for (let [option, { isActive }] of newOptions) {
      if (foundLastActiveOption && nextActiveOption) break;
      if (
        newSelectedOptions.has(option) ||
        (inputValue && !option.toLowerCase().includes(inputValue.toLowerCase()))
      )
        continue;
      if (isActive && !foundLastActiveOption) {
        foundLastActiveOption = true;
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

  // TODO move to hook?
  const onOutsideDropdownClick = (e) => {
    if (!selectRef.current.contains(e.target)) setIsOpen(false);
  };

  // close dropdown when user clicks somewhere outside of it while its open
  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("mouseup", onOutsideDropdownClick);
    return () => {
      document.removeEventListener("mouseup", onOutsideDropdownClick);
    };
  }, [isOpen]);

  // initialize dropdownOptions Map
  useEffect(() => {
    let initOptions = new Map();
    [...values].forEach((option, i) => {
      initOptions.set(option, { isActive: i === 0 ? true : false });
    });
    setOptions(initOptions);
    setVisibleOptions(initOptions.size);
  }, [setOptions, setVisibleOptions, values]);

  return (
    <div
      className={multiSelectSearch}
      onClick={onMultiSelectSearchClick}
      ref={multiSelectSearchRef}
      onKeyDown={onMultiSelectSearchKeyDown}
    >
      {[...selectedOptions].map((selection, i) => (
        <Selection key={i} onClickHandler={onSelectionClick} data={selection} />
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
        ref={selectRef}
        options={[...options]}
        visibleOptions={visibleOptions}
        inputValue={inputValue}
        optionRef={optionRef}
      />
    </div>
  );
};
