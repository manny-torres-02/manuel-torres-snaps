import Card from "../Card/Card";
// import ImageData from "./src/data/photos.json";
import ImageData from "/Users/manueltorres/Documents/Brainstation_SE/manuel-torres-snaps/src/data/photos.json";
import "./Gallery.css";
let data = ImageData;
// console.log(data);
const Gallery = ({ selectedTag }) => {
  // Create function to handle the selected tag
  // I want to compare this tag to all of the tags within  each image/card
  //If the tag matches, O want this to show the cards associated
  // if the card does not match, then I want do not want that card to be displayed 
  //if the card matches, I want the card to be displayed 
  const test = () => {};
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
            // tags.map((tag))
            comments={image.comments}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
