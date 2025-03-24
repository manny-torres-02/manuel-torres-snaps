import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "../Modal/Modal";
import "./Form.scss";

const Form = ({
  baseURL,
  photoID,
  fetchPhoto,
  fetchComments,
  setRefreshComments,
}) => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [commentErrorState, setCommentErrorState] = useState(false);
  const [nameErrorState, setNameErrorState] = useState(false);

  const nameUpdate = (e) => {
    setName(e.target.value);

    if (nameErrorState) {
      setNameErrorState(false);
    }
  };

  const commentUpdate = (e) => {
    setComment(e.target.value);

    if (commentErrorState) {
      setCommentErrorState(false);
    }
  };

  const getErrorMessage = (name, comment) => {
    if (nameErrorState && commentErrorState) {
      return "Please fill in the name and the comment fields";
    } else if (commentErrorState) {
      return "Please fill in the comment field";
    } else if (nameErrorState) {
      return "Please fill in the name field";
    }
    return "";
  };

  const nameAndComment = "Please fill in the name and the comment fields";
  const commentMissing = "Please fill in the comment field";
  const nameMissing = "Please fill in the name field";
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the error message if one of the following conditions is met and break out the statements
    if (!name && !comment) {
      // TODO: Remove teh set Error Message and coresponding state
      // setErrorMessage("Please fill in the name and the comment fields");
      setShowModal(true);
      setCommentErrorState(true);
      setNameErrorState(true);
      return;
    } else if (!comment) {
      // setErrorMessage("please fill in the comment field");
      setShowModal(true);
      setCommentErrorState(true);
      return;
    } else if (!name) {
      // setErrorMessage("please  in the name field");
      setShowModal(true);
      setNameErrorState(true);
      return;
    }

    try {
      await axios.post(`${baseURL}photos/${id}/comments`, { name, comment });
      setRefreshComments((prev) => !prev);
      setName("");
      setComment("");
      await fetchComments();
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
        </div>
        <button className="form__button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <Modal
        showModal={showModal}
        errorMessage={getErrorMessage()}
        close={() => setShowModal(false)}
      />
    </>
  );
};

export default Form;
