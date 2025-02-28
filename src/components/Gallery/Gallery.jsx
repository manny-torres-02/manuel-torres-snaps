import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../Card/Card";
import ImageData from "../../data/photos.json";
import "./Gallery.scss";

// let data = ImageData;
const Gallery = ({ baseURL, selectedTag, showFiltered, showTags }) => {
  const [photoData, setPhotoData] = useState();
  const test = ImageData.filter((image) =>
    selectedTag ? image.tags.includes(selectedTag) : true
  );
  let data;

  useEffect(() => {
    //function to pull the key
    // const fetchKey = async () => {
    //   try {
    //     const response = await axios.get(`${baseURL}register`);
    //     console.log(response);
    //   } catch (error) {
    //     console.log(error);
    //   }
    const fetchPhotoData = async () => {
      try {
        const fetchData = await axios.get(
          `${baseURL}photos/?api_key=71e72653-f4b0-4ace-9453-cd4c8c9a9ccf`
        );
        console.log("this is from the call", fetchData.data);
        data = fetchData.data;
        setPhotoData(fetchData.data);
        console.log("running setPhotoData!: ", data);
      } catch (error) {
        console.log(error);
      }
    }; // fetchKey();
    // TODO: run if conditional to check if there is any type of photo data:

    fetchPhotoData();
  }, []);

  console.log("running PhotioData outside of useEffect", photoData[1].tags);

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
