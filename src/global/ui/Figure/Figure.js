import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { Tag } from "../Tag/Tag";

import { modalStateUpdated } from "../../../app/Modal/modalSlice";

import {
  figure,
  figureHidden,
  figureCaption,
  figureCaptionHeader,
  figureCaptionDescription,
  figureCaptionTags,
} from "./Figure.scss";

export const Figure = ({ isHidden, modalSrc, details, children }) => {
  const dispatch = useDispatch();
  return (
    <figure
      className={cx(figure, { [figureHidden]: isHidden })}
      onClick={() =>
        dispatch(modalStateUpdated({ type: "img", file: modalSrc }))
      }
    >
      {children}
      {details && (
        <figcaption className={figureCaption}>
          <h3 className={figureCaptionHeader}>{details.title}</h3>
          <p className={figureCaptionDescription}>{details.description}</p>
          <div className={figureCaptionTags}>
            {details.tags.map((tag, i) => (
              <Tag key={i} data={tag} />
            ))}
          </div>
        </figcaption>
      )}
    </figure>
  );
};
