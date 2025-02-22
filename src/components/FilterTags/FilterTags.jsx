import "./FilterTags.css";
import Tag from "../Tags/Tags";
import TagData from "/Users/manueltorres/Documents/Brainstation_SE/manuel-torres-snaps/src/data/tags.json";

import { useState } from "react";
const FilterTags = ({ setShowTags, showTags }) => {
  const [tagActive, setTagActive] = 
  return (
    <>
      {showTags && (
        <div className={`tags__wrapper`}>
          <p>Filters</p>

          <div>
            {TagData.map((tag, index) => (
              <Tag name={tag} key={index} isVisible={showTags} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FilterTags;
