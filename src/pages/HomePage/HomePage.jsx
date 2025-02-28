import React, { useState, useEffect } from "react";
import axios from "axios";

import Hero from "../../components/Hero/Hero";
import FilterTags from "../../components/FilterTags/FilterTags";
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  const [showTags, setShowTags] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  //

  const baseURL = "https://unit-3-project-c5faaab51857.herokuapp.com/";
  const key = "3b75373b-9ad0-47af-bd5d-707946328244";

  function handleFilterClick() {
    setShowTags(!showTags);

    if (showTags === true) {
      setSelectedTag(null);
    }
  }

  useEffect(() => {
    //function to pull the key
    // const fetchKey = async () => {
    //   try {
    //     const response = await axios.get(`${baseURL}register`);
    //     console.log(response);
    //   } catch (error) {
    //     console.log(error);
    //   }

  }, []);

  return (
    <>
      <Header handleFilterClick={handleFilterClick} />
      <div className="App-Wrapper">
        <FilterTags
          showTags={showTags}
          setShowTags={setShowTags}
          setSelectedTag={setSelectedTag}
          selectedTag={selectedTag}
          showFiltered={showTags}
        />
        <div className="Hero-Gallery-wrapper">
          <Hero />
          <Gallery
            baseURL={baseURL}
            selectedTag={selectedTag}
            showFiltered={showTags}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
