import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../Card/Card";
import "./Gallery.scss";

// let data = ImageData;
const Gallery = ({ baseURL, selectedTag, showFiltered, showTags }) => {
  const [photoData, setPhotoData] = useState([]);

  const filteredImages = photoData.filter((photos) =>
    //if selectedTag is true then make this filter
    // on the photos.tags and match to the selected tag
    //the selectedTags is set up and added to FilterTags.jsx
    selectedTag ? photos.tags.includes(selectedTag) : true
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
        console.log("fetchPhotoDatais called");
        // const fetchData = await axios.get(`${baseURL}photo`);
        const fetchData = await axios.get("http://localhost:8080/photos");

        console.log(fetchData);
        // console.log("this is from the call", fetchData.data);
        data = fetchData.data;
        setPhotoData(fetchData.data);
        // console.log("running setPhotoData!: ", data);
      } catch (error) {
        console.log(error);
      }
    }; // fetchKey();
    // TODO: run if conditional to check if there is any type of photo data:

    fetchPhotoData();
  }, []);

  // console.log("running PhotioData outside of useEffect", photoData);

  return (
    <>
      <div className={`gallery ${showFiltered ? "gallery__with-filters" : ""}`}>
        {filteredImages.map((photoData) => (
          <div className="card-wrapper" key={photoData.id}>
            <Card
              photoID={photoData.id}
              showFiltered={showFiltered}
              photo={photoData.photo}
              photoDescription={photoData.photoDescription}
              photographer={photoData.photographer}
              likes={photoData.likes}
              timestamp={photoData.timestamp}
              tags={photoData.tags}
              comments={photoData.comments}
              showLikes={false}
              showTimeStamp={false}
              showPhotographerNameInCard={false}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
