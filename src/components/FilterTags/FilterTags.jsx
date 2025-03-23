import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FilterTags.scss";
import Tag from "../Tags/Tags";

const FilterTags = ({
  baseURL,
  setShowTags,
  showTags,
  setSelectedTag,
  selectedTag,
}) => {
  const [filterTags, setFilterTags] = useState([]);
  let data;
  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  useEffect(() => {
    const FetchTags = async () => {
      try {
        const test = await axios.get(`${baseURL}tags`);
        data = test;
        setFilterTags(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchTags();
  }, []);

  return (
    <>
      {showTags && (
        <div className="tags-wrapper">
          <h1 className="tags-wrapper__title">Filters</h1>
          <div>
            {filterTags.map((tag, index) => (
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
