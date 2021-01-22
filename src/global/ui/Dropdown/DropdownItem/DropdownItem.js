import React, { forwardRef } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import {
  dropdownItem,
  dropdownItemHidden,
  dropdownItemActive,
} from "./DropdownItem.scss";
import { Dropdown } from "../Dropdown";

export const DropdownItem = forwardRef(
  (
    {
      option,
      conditions: { isActive, isSelected, isFiltered },
      onClickHandler,
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cx(dropdownItem, {
        [dropdownItemHidden]: isSelected || isFiltered,
        [dropdownItemActive]: isActive,
      })}
      data-value={option}
      onClick={(e) => onClickHandler(e)}
    >
      {option}
    </div>
  )
);

Dropdown.propTypes = {
  option: PropTypes.string.isRequired,
  conditions: PropTypes.shape({
    isActive: PropTypes.bool.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
  }),
  onClickHandler: PropTypes.func,
};

Dropdown.defaultProps = {
  onClickHandler: () => {},
};
