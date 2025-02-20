import Card from "../Card/Card";
// import ImageData from "./src/data/photos.json";
import ImageData from "/Users/manueltorres/Documents/Brainstation_SE/manuel-torres-snaps/src/data/photos.json";
import "./Gallery.css";
let data = ImageData;
console.log(data);
const Gallery = () => {
  return (
    <>
      <div className="gallery">
        {/* need to pass in all of the cards here*/}
        {/* create the card component*         /}
      {/* Then I need to map out all the images and data to the card components  */}
        {/* Passing the props will be difficult, start with just the images first  */}
        {/* ONce this is mapped out, I should be able to push the changes, rebase, and then continue to style */}
        {ImageData.map((image) => (
          <Card
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
