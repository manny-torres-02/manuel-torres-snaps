import React, { useState } from "react";
import axios from "axios";
import "./Form.scss";

const Form = () => {
  const [name, setName] = useSatate("");
  const [comment, setComment
    
  ] = useSatate("");
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
      </form>
    </>
  );
};

export default Form;
