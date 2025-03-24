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
  const [photoComments, setPhotoComments] = useState(null);
  const [headerIcon, setHeaderIcon] = useState(true);
  const [refreshComments, setRefreshComments] = useState(false);

  const baseURL = "http://localhost:8080/";

  const adjustDate = (item) => {
    const date = new Date(item);
    // months are 0 indexed
    const month = String(date.getUTCMonth() + 1);
    const day = String(date.getDate()).padStart(2, "0"); //padstring to properly show the date if needed.
    const year = String(date.getUTCFullYear());
    let placeholder = month + "/" + day + "/" + year;
    return placeholder;
  };

  const fetchPhotoPlusComments = async () => {
    try {
      const photoResp = await axios.get(`${baseURL}photos/${id}`);
      const commentsResp = await axios.get(`${baseURL}photos/${id}/comments`);

      commentsResp.data.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );

      const formattedComments = commentsResp.data.map((comment) => ({
        ...comment,
        timestamp: adjustDate(comment.timestamp),
      }));

      setPhotoData(photoResp);
      setPhotoComments(formattedComments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhotoPlusComments();
  }, [refreshComments]);

  if (!photoData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header headerIcon={headerIcon} />
      <div className="photoPageCardWrapper">
        <div className="wrapper">
          <Card
            showFiltered={false}
            photo={photoData.data}
            showLikes={true}
            showTimeStamp={true}
            showPhotographerNameInCard={true}
            forPhotoPage={true}
          />
          <Form
            baseURL={baseURL}
            fetchComments={fetchPhotoPlusComments}
            setRefreshComments={setRefreshComments}
          />
          <p> {photoComments.length} comments</p>
          {photoComments.map((comment) => (
            <Comments
              key={comment.id}
              name={comment.name}
              timestamp={adjustDate(comment.timestamp)}
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
