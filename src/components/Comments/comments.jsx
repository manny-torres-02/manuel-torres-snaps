import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Comments.scss";
import { useParams } from "react-router-dom";

const Comments = ({ name, timestamp, comment }) => {
  const { id } = useParams();
  useEffect(() => {}, []);

  return (
    <>
      <div className="comment">
        <div className="comment__data-wrapper">
          <p>{name}</p>
          <p>{timestamp}</p>
        </div>
        <div class="comment__body">{comment}</div>
      </div>
    </>
  );
};

export default Comments;
