import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Form from "../../components/Form/Form";
import Comments from "../../components/Comments/Comments";

const PhotoPage = () => {
  const { id } = useParams();
  const [photoData, setPhotoData] = useState(null);
  const [photoComments, setPhotoComments] = useState([]);
  const baseURL = "https://unit-3-project-c5faaab51857.herokuapp.com/";

  // console.log(id);

  const fetchComments = async () => {
    let data;
    const adjustDate = (item) => {
      const date = new Date(item);
      // months are 0 indexed
      const month = String(date.getUTCMonth() + 1);
      const day = String(date.getDate()).padStart(2, "0"); //padstring to properly show the date if needed.
      const year = String(date.getUTCFullYear());
      let placeholder = month + "/" + day + "/" + year;
      console.log(placeholder);
      // return date.toLocaleDateString;
      return placeholder;
    };

    try {
      const response = await axios.get(
        `${baseURL}photos/${id}/comments?api_key=71e72653-f4b0-4ace-9453-cd4c8c9a9ccf`
      );
      // console.log("here are the comments", response.data);
      //sort comments
      data = response.data;
      data.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
      // console.log("return the data;", data);
      const formatDate = data.map((comment) => ({
        ...comment,
        timestamp: adjustDate(comment.timestamp),
      }));
      console.log(formatDate);
      setPhotoComments(formatDate);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPhoto = async () => {
    try {
      const response = await axios.get(
        `${baseURL}photos/${id}?api_key=71e72653-f4b0-4ace-9453-cd4c8c9a9ccf`
      );
      // console.log("API call to photopage:", response.data);
      setPhotoData(response.data); // Set the state with the fetched data
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // TODO: is it better to have the functions live within useEffect? possibly shift this outside for readability

    fetchPhoto();
    fetchComments();
  }, [baseURL]); // Ensure the effect runs when id or baseURL changes

  if (!photoData) {
    return <div>Loading...</div>;
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
          timestamp={photoData.timestamp}
          comments={photoData.comments}
          likes={photoData.likes}
          showLikes={true}
          showTimeStamp={true}
          showPhotographerNameInCard={true}
        />
      </div>
      <Form baseURL={baseURL} fetchComments={fetchComments} />

      <div>
        {photoComments.map((comment) => (
          <Comments
            key={comment.id}
            name={comment.name}
            timestamp={comment.timestamp}
            comment={comment.comment}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default PhotoPage;
