import React, { forwardRef } from "react";
import cx from "classnames";

import {
  dropdownItem,
  dropdownItemHidden,
  dropdownItemActive,
} from "./DropdownItem.scss";

export const DropdownItem = forwardRef(
  ({ isSelected, isFiltered, isActive, tag, onClickHandler }, ref) => (
    <div
      ref={ref}
      className={cx(dropdownItem, {
        [dropdownItemHidden]: isSelected || isFiltered,
        [dropdownItemActive]: isActive,
      })}
      data-value={tag}
      onClick={(e) => onClickHandler(e)}
    >
      {tag}
    </div>
  )
);
