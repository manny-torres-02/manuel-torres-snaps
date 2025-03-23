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
    // console.log(tag);
    if (selectedTag === tag) {
      // console.log("the tag and selected tag are the same ");
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  useEffect(() => {
    const FetchTags = async () => {
      try {
        // const test = await axios.get(
        //   `${baseURL}tags/?api_key=71e72653-f4b0-4ace-9453-cd4c8c9a9ccf`
        // );
        const test = await axios.get(`${baseURL}tags`);
        console.log("this is pulling the tags:", test);
        data = test;
        setFilterTags(data.data);
        console.log("pulling the data", data.data);
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
                // TODO: import the UUID package and test that out here...
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
