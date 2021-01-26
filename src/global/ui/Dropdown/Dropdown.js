import React from "react";
import PropTypes from "prop-types";

import { DropdownItem } from "./DropdownItem/DropdownItem";

import { dropdown } from "./Dropdown.scss";

export const Dropdown = ({
  options,
  multiple,
  value,
  name,
  onOptionClickHandler,
}) => (
  <select
    className={dropdown}
    multiple={multiple}
    value={value}
    name={name}
    onChange={handleOnChange}
  >
    {options.map(([option, conditions], i) => (
      <DropdownItem
        key={i}
        option={option}
        conditions={conditions}
        onClickHandler={onOptionClickHandler}
      />
    ))}
  </select>
);

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onOptionClickHandler: PropTypes.func,
};

Dropdown.defaultProps = {
  onOptionClickHandler: () => {},
};
