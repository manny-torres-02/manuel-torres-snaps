import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Form from "../../components/Form/Form";
import Comments from "../../components/Comments/Comments";
import "./PhotoPage.scss";

const PhotoPage = () => {
  const { id } = useParams();
  const [photoData, setPhotoData] = useState(null);
  const [photoComments, setPhotoComments] = useState([]);
  const [headerIcon, setHeaderIcon] = useState(true);
  const [commentsLength, setCommentsLength] = useState(0);
  const baseURL = "https://unit-3-project-c5faaab51857.herokuapp.com/";

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
      return placeholder;
    };

    try {
      const response = await axios.get(
        `${baseURL}photos/${id}/comments?api_key=71e72653-f4b0-4ace-9453-cd4c8c9a9ccf`
      );
      data = response.data;
      setCommentsLength(data.length);
      data.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
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
      setPhotoData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPhoto();
    fetchComments();
  }, [commentsLength]);

  if (!photoData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header headerIcon={headerIcon} />
      <div className="photoPageCardWrapper">
        <div className="wrapper">
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
            forPhotoPage={true}
            adjustDate={adjustDate}
          />
          <Form baseURL={baseURL} fetchComments={fetchComments} />
          <p> {commentsLength} comments</p>
          {photoComments.map((comment) => (
            <Comments
              key={comment.id}
              name={comment.name}
              timestamp={comment.timestamp}
              comment={comment.comment}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhotoPage;
