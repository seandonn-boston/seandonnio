import React, { forwardRef } from "react";
import cx from "classnames";

import { Option } from "./Option/Option";

import { select, selectHidden } from "./Select.scss";

export const Select = forwardRef(
  (
    {
      selectedOptions,
      onChangeHandler,
      multiple = false,
      isHidden,
      options,
      visibleOptions,
      inputValue,
      optionRef,
    },
    ref
  ) => (
    <select
      value={[...selectedOptions]}
      onChange={onChangeHandler}
      multiple={multiple}
      className={cx(select, { [selectHidden]: isHidden })}
      autoComplete="off"
      size={
        visibleOptions < 8 ? (visibleOptions === 0 ? 1 : visibleOptions) : 8
      }
      ref={ref}
    >
      {options.map(([option, { isActive }], i) => (
        <Option
          key={i}
          value={option}
          content={option}
          isActive={isActive}
          isHidden={
            selectedOptions.has(option) ||
            !option.toLowerCase().includes(inputValue.toLowerCase())
          }
          ref={isActive ? optionRef : null}
        />
      ))}
      {visibleOptions === 0 && (
        <Option disabled content="No results found."></Option>
      )}
    </select>
  )
);
