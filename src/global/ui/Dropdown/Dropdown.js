import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import { DropdownItem } from "./DropdownItem/DropdownItem";

import { dropdown } from "./Dropdown.scss";

export const Dropdown = forwardRef(
  ({ options, optionRef, onOptionClickHandler }, ref) => (
    <div className={dropdown} ref={ref}>
      {options.map(([option, conditions], i) => (
        <DropdownItem
          ref={conditions.isActive ? optionRef : null}
          key={i}
          option={option}
          conditions={conditions}
          onClickHandler={onOptionClickHandler}
        />
      ))}
    </div>
  )
);

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  optionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  onOptionClickHandler: PropTypes.func,
};

Dropdown.defaultProps = {
  onOptionClickHandler: () => {},
};
