import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import {
  dropdownItem,
  dropdownItemHidden,
  dropdownItemActive,
} from "./DropdownItem.scss";

export const DropdownItem = ({
  option,
  conditions: { isActive, isSelected, isFiltered },
  onClickHandler,
}) => (
  <option
    className={cx(dropdownItem, {
      [dropdownItemHidden]: isSelected || isFiltered,
      [dropdownItemActive]: isActive,
    })}
    onClick={(e) => onClickHandler(e)}
    value={option}
  >
    {option}
  </option>
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
