import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import {
  dropdownItem,
  dropdownItemHidden,
  dropdownItemActive,
} from "./DropdownItem.scss";

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

DropdownItem.propTypes = {
  option: PropTypes.string.isRequired,
  conditions: PropTypes.shape({
    isActive: PropTypes.bool.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
  }),
  onClickHandler: PropTypes.func,
};

DropdownItem.defaultProps = {
  onClickHandler: () => {},
};
