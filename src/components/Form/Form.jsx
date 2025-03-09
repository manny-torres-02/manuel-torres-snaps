import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Form.scss";

const Form = ({ baseURL, photoID, fetchPhoto, fetchComments }) => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const nameUpdate = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const commentUpdate = (e) => {
    setComment(e.target.value);
    console.log(setComment);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, comment);
    try {
      const response = await axios.post(
        `${baseURL}photos/${id}/comments?api_key=71e72653-f4b0-4ace-9453-cd4c8c9a9ccf`,
        { name, comment }
      );

      console.log("HandleSubmit Ran");
      fetchComments();
      // return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={nameUpdate}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="comment"></label>
          <textarea
            type="text"
            name="comment"
            id="comment"
            onChange={commentUpdate}
            value={comment}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
};

export default Form;
