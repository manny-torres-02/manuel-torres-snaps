import "./FilterTags.css";
import Tag from "../Tags/Tags";
import TagData from "/Users/manueltorres/Documents/Brainstation_SE/manuel-torres-snaps/src/data/tags.json";

console.log(TagData);
const FilterTags = () => {
  <>
    THIS IS THE FILTER TAGS
    <div>
      {TagData.map((tag) => (
        <Tag name={tag} />
      ))}
    </div>
  </>;
};

export default FilterTags;
