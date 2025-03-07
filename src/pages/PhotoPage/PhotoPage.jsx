import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const PhotoPage = () => {
  return (
    <>
      <Header />
      <h1> Hello</h1>

      <div style={{ fontSize: "50px" }}>Now showing post {id}</div>
      <Footer />
    </>
  );
};

export default PhotoPage;
