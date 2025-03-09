import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Comments.scss";
import { useParams } from "react-router-dom";

const Comments = ({ name, timestamp, comment }) => {
  const { id } = useParams();
  useEffect(() => {
    // first;
    // return () => {
    // second;
    // };
  }, []);

  return (
    <>
      <div className="comment__wrapper">
        {/* Number of Comments */}
        {name}
        {timestamp}
        {comment}
      </div>
    </>
  );
};

export default Comments;
