import React, { useState } from "react";
import axios from "axios";
import "./Form.scss";

const Form = ({ baseURL, photoID, fetchPhoto }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${baseURL}photos/${photoID}/comments?api_key=71e72653-f4b0-4ace-9453-cd4c8c9a9ccf`, {name, comment}
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>TEST</div>
      <div>TEST</div>
      <form method="post">
        <div>
          <label for="name"></label>
          <input type="text" name="name" id="name" value={name} />
        </div>
        <div>
          <label for="comment"></label>
          <textarea type="text" name="comment" id="comment" value={comment} />
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
