import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "../Modal/Modal";
import "./Form.scss";

const Form = ({ baseURL, photoID, fetchPhoto, fetchComments }) => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [nameErrorState, setNameErrorState] = useState(false);
  const [commentErrorState, setCommentErrorState] = useState(false);

  const nameUpdate = (e) => {
    setName(e.target.value);
  };

  const commentUpdate = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // BREAK IF THE STATEMENT AGREES
    if (!name && !comment) {
      setErrorMessage("please fill in the name and the comment fields");
      setShowModal(true);
      setNameErrorState(true);
      setCommentErrorState(true);
      return;
    } else if (!comment) {
      setErrorMessage("please fill in the comment field");
      setShowModal(true);
      setCommentErrorState(true);
      return;
    } else if (!name) {
      setErrorMessage("please fill in the name field");
      setShowModal(true);
      setNameErrorState(true);
      return;
    }
    try {
      const response = await axios.post(
        `${baseURL}photos/${id}/comments?api_key=71e72653-f4b0-4ace-9453-cd4c8c9a9ccf`,
        { name, comment }
    try {
      await axios.post(
        `${baseURL}photos/${photoID}/comments?api_key=71e72653-f4b0-4ace-9453-cd4c8c9a9ccf`, {name, comment}
      );

      fetchComments();
      setName("");
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <div className="form__input-wrapper">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className={`form__text-input ${
              nameErrorState ? "form__text-input--error" : ""
            }`}
            type="text"
            name="name"
            id="name"
            onChange={nameUpdate}
            value={name}
          />
      <div>TEST</div>
      <div>TEST</div>
      <form method="post">
        <div>
          <label for="name"></label>
          <input type="text" name="name" id="name" value={name} />
        </div>
        <div className="form__input-wrapper">
          <label className="form__label" htmlFor="comment">
            Comment
          </label>
          <textarea
            className={`form__text-input ${
              commentErrorState ? "form__text-input--error" : ""
            }`}
            type="text"
            name="comment"
            id="comment"
            onChange={commentUpdate}
            value={comment}
          />
        <div>
          <label for="comment"></label>
          <textarea type="text" name="comment" id="comment" value={comment} />
        </div>
        <button className="form__button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <Modal
        showModal={showModal}
        errorMessage={errorMessage}
        close={() => setShowModal(false)}
      />
    </>
  );
};

export default Form;
