import "./FilterTags.css";
import Tag from "../Tags/Tags";
import TagData from "/Users/manueltorres/Documents/Brainstation_SE/manuel-torres-snaps/src/data/tags.json";

// console.log(TagData);
const FilterTags = () => {
  return (
    <>
      <div className="Tags_Wrapper">
        <p>Filters</p>
        <div>
          {TagData.map((tag, index) => (
            <Tag name={tag} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterTags;
