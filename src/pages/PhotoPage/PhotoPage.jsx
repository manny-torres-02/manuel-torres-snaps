import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";

const PhotoPage = () => {
  const { id } = useParams(); // Ensure the parameter name matches the route
  const [photoData, setPhotoData] = useState(null);
  const baseURL = "https://unit-3-project-c5faaab51857.herokuapp.com/";
  console.log(id);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get(
          `${baseURL}photos/${id}?api_key=71e72653-f4b0-4ace-9453-cd4c8c9a9ccf`
        );
        console.log("API call to photopage:", response.data);
        setPhotoData(response.data); // Set the state with the fetched data
      } catch (error) {
        console.log(error);
      }
    };

    fetchPhoto();
  }, [id, baseURL]); // Ensure the effect runs when id or baseURL changes

  if (!photoData) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  return (
    <>
      <Header />
      <div>
        <h1>{id} </h1>
        <Card
          photoID={photoData.id}
          photo={photoData.photo}
          photoDescription={photoData.photoDescription}
          photographer={photoData.photographer}
          tags={photoData.tags}
          likes={photoData.likes}
          timestamp={photoData.timestamp}
          comments={photoData.comments}
          likes={photoData.likes}
          showLikes={true}
          showTimeStamp={true}
          showPhotographerNameInCard={true}
        />
      </div>
      <form type="submit"></form>
      <Footer />
    </>
  );
};

export default PhotoPage;
