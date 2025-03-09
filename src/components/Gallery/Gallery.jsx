import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../Card/Card";
import "./Gallery.scss";

const Gallery = ({ baseURL, selectedTag, showFiltered, showTags }) => {
  const [photoData, setPhotoData] = useState([]);

  const filteredImages = photoData.filter((photos) =>
    selectedTag ? photos.tags.includes(selectedTag) : true
  );
  let data;

  useEffect(() => {
    const fetchPhotoData = async () => {
      try {
        const fetchData = await axios.get(
          `${baseURL}photos/?api_key=71e72653-f4b0-4ace-9453-cd4c8c9a9ccf`
        );
        data = fetchData.data;
        setPhotoData(fetchData.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPhotoData();
  }, []);

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
