import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { modalStateUpdated } from "../../../app/Modal/modalSlice";

import { figure, figureHidden } from "./Figure.scss";

export const Figure = ({ isHidden, modalSrc, children }) => {
  const dispatch = useDispatch();
  return (
    <figure
      className={cx(figure, { [figureHidden]: isHidden })}
      onClick={() =>
        dispatch(modalStateUpdated({ type: "img", file: modalSrc }))
      }
    >
      {children}
    </figure>
  );
};
