import Card from "../Card/Card";
import ImageData from "../../data/photos.json";
import "./Gallery.scss";

// let data = ImageData;
const Gallery = ({ selectedTag, showFiltered, showTags }) => {
  const test = ImageData.filter((image) =>
    selectedTag ? image.tags.includes(selectedTag) : true
  );

  return (
    <>
      <div className={`gallery ${showFiltered ? "gallery__with-filters" : ""}`}>
        {test.map((image) => (
          <Card
            showFiltered={showFiltered}
            key={image.id}
            photo={image.photo}
            photoDescription={image.photoDescription}
            photographer={image.photographer}
            likes={image.likes}
            timestamp={image.timestamp}
            tags={image.tags}
            comments={image.comments}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
