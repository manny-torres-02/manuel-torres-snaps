// import
import Hero from "../../components/Hero/Hero";
import FilterTags from "../../components/FilterTags/FilterTags";
import Gallery from "../../components/Gallery/Gallery";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  const [showTags, setShowTags] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  function handleFilterClick() {
    setShowTags(!showTags);

    if (showTags === true) {
      setSelectedTag(null);
    }
    console.log("test");
  }

  function selectTag() {}
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
          <Gallery selectedTag={selectedTag} showFiltered={showTags} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
