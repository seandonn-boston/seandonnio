import React from "react";

import {
  figcaption,
  figcaptionHeader,
  figcaptionDescription,
  figcaptionTags,
  figcaptionTagsTag,
} from "./Figcaption.scss";

export const Figcaption = ({ title, description, tags }) => (
  <figcaption className={figcaption}>
    <h3 className={figcaptionHeader}>{title}</h3>
    <p className={figcaptionDescription}>{description}</p>
    {/* move this to a reusable component to share with the search bar */}
    <ul className={figcaptionTags}>
      {tags.map((tag, i) => (
        <li key={i} className={figcaptionTagsTag}>
          {tag}
        </li>
      ))}
    </ul>
  </figcaption>
);
