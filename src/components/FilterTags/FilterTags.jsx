import "./FilterTags.css";
import Tag from "../Tags/Tags";
import TagData from "/Users/manueltorres/Documents/Brainstation_SE/manuel-torres-snaps/src/data/tags.json";
import { useState } from "react";

const FilterTags = ({ setShowTags, showTags, setSelectedTag, selectedTag }) => {
  //create state for the tag

  // update the tag
  const handleTagClick = (tag) => {
    console.log(tag);
    setSelectedTag(tag);
  };

  return (
    <>
      {showTags && (
        <div className="tags-wrapper">
          <h1 className="tags-wrapper__title">Filters</h1>

          <div>
            {TagData.map((tag, index) => (
              <Tag
                name={tag}
                key={index}
                isVisible={showTags}
                onClick={() => handleTagClick(tag)}
                isSelected={selectedTag === tag}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FilterTags;
