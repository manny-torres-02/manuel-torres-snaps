import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../Card/Card";
import "./Gallery.scss";

const Gallery = ({ baseURL, selectedTag, showFiltered, showTags }) => {
  const [photoData, setPhotoData] = useState([]);

  const filteredImages = photoData.filter((photos) =>
    // if selectedTag is true then make this filter
    // on the photos.tags and match to the selected tag
    selectedTag ? photos.tags.includes(selectedTag) : true
  );
  let data;

  useEffect(() => {
    const fetchPhotoData = async () => {
      try {
        const fetchData = await axios.get(`${baseURL}photos`);
        console.log(fetchData);
        data = fetchData.data;
        setPhotoData(fetchData.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPhotoData();
  }, []);

  console.log("this is the photoData:", photoData);

  return (
    <>
      <div className={`gallery ${showFiltered ? "gallery__with-filters" : ""}`}>
        {filteredImages.map((photoData) => (
          <div className="card-wrapper" key={photoData.id}>
            <Card
              // adjustDate={adjustDate}
              showFiltered={false}
              photo={photoData}
              showLikes={true}
              showTimeStamp={true}
              showPhotographerNameInCard={true}
              forPhotoPage={false}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
